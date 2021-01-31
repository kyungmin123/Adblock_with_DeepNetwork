# Chapter 4. 분류하는 뉴런을 만듭니다. - 이진분류
## 04-4 분류용 데이터 세트를 준비합니다
사이킷런에 포함된 '위스콘신 유방암 데이터 세트'를 사용한다.
### 유방암 데이터 세트를 소개합니다
여기서 해결할 문제는 유방암 데이터 샘플이 악성종양(True)인지 혹은 정상종양(False)인지를 구분하는 **이진분류**문제이다.  
주의할 점은 의학분야에서 양성종양이 긍정적인 의미이고 악성종양이 부정적인 의미이다.  
그리고 이진 분류 문제에서는 해결해야 할 목표를 양성 샘플이라 부른다.  
지금은 해결과제가 악성 종양인지를 구분해야 하는 것이므로 양성 샘플이 악성 종양이라는 것에 주의하자.
### 유방암 데이터 세트 준비하기
```python
# 1. 유방암 데이터 세트 불러오기
from sklearn.datasets import load_breast_cancer
cancer = load_breast_cancer()

# 2. 입력 데이터 확인하기. cancer에는 569개의 샘플과 30개의 특성이 있다.
print(cancer.data.shape, cancer.target.shape)

# 3. 여러 특성의 분포를 확인하기 위해서 '박스플롯' 그리기
plt.boxplot(cancer.data)
plt.xlabel('feature')
plt.ylabel('value')
plt.show()

# 4. 분포가 다른 특성들보다 큰 4, 14, 24번째 특성의 이름 확인하기
cancer.feature_name[[3, 13, 23]]

# 5. 타깃 데이터 확인하기
# -> 이진 분류 문제이므로 타깃 배열 안에는 음성클래스(0), 양성클래스(1) 2개의 값만 들어있다.
# 212개의 음성 클래스(정상종양), 357개의 양성 클래스(음성종양)가 있다.
np.unique(cancer.target, return_counts=True)

# 6. 훈련 데이터 세트 저장하기
x = cancer.data
y = cancer.target
```
## 04-5 로지스틱 회귀를 위한 뉴런을 만듭니다
3장에서는 훈련 데이터 세트 전체를 사용해서 모델을 훈련했지만 모델의 성능을 평가하지 않고 실전에 투입하면 잘못된 결과를 초래할 수 있으니 위험하다.  
또한 훈련 데이터 세트로 학습된 모델을 다시 훈련 데이터 세트로 평가하는 것은 의미가 없다.
### 모델의 성능 평가를 위한 훈련 세트와 테스트 세트
훈련된 모델의 실전 성능을 **일반화 성능(generalization performance)** 이라고 부른다.  
모델을 학습시킨 훈련 데이터 세트로 다시 모델의 성능을 평가하면 당연히 그 모델은 좋은 성능이 나올 것이기 때문에 이런 성능 평가를 **'과도하게 낙관적으로 일반화 성능을 추정한다'** 라고 말한다.  
올바르게 모델의 성능을 측정하기 위해서는 훈련 데이터 세트를 두 덩어리로 나누어 하나는 훈련에, 다른 하나는 테스트에 사용하면 된다.  
이 때 각각의 덩어리를 **훈련 세트** 와 **테스트 세트** 라고 부른다.  
**훈련 데이터 세트를 훈련 세트와 테스트 세트로 나누는 규칙**
- 테스트 세트보다 훈련 세트가 더 많아야 한다.
- 훈련 데이터 세트를 나누기 전에 양성, 음성 클래스가 어느 한쪽에 몰리지 않도록 골고루 섞여야 한다.
이 과정은 사이킷런의 도구를 사용하면 편리하게 진행할 수 있다.
### 훈련 세트와 테스트 세트로 나누기
훈련 세트에 양성 클래스가 너무 많이 몰리거나 테스트 세트에 음성 클래스가 너무 많이 몰리면 모델이 데이터에 있는 패턴을 올바르게 학습하지 못하거나 성능을 잘못 측정할 수도 있기 때문에 훈련 세트와 테스트 세트로 나눌 때에는 양성, 음성 클래스가 각각에 고르게 분포하도록 만들어야 한다.
```python
# 1. train_test_split() 함수로 훈련 데이터 세트 나누기.
# 기본적으로 훈련세트 75%, 테스트 세트 25%로 나눈다.
from sklearn.model_selection import train_test_split
"""
parameter 설정
- stratity: 지정한 데이터의 비율을 유지한다. 여기서는 y의 클래스 비율을 유지하는 것.
- test_size: 테스트 세트의 비율이나 개수 설정. 여기서는 테스트 세트의 비율을 20%로 설정함.
- random_state: 난수 생성할 때의 seed값 설정. 실험 결과를 같게 하기 위해서 설정했다.
"""
x_train, x_test, y_train, y_test = train_test_split(x, y, stratify=y, test_size=0.2, random_state=42)

# 2. 결과 확인하기
# 4:1로 나누어짐
print(x_train.shape, x_test.shape)

# 3. unique() 함수로 훈련 세트의 타깃 확인하기
# stratity=y로 설정했기 때문에 훈련세트의 클래스 비율과 훈련 데이터 세트의 클래스 비율이 비슷하다.
np.unique(y_train, return_counts=True)
```
### 로지스틱 회귀 구현하기
```python
class LogisticNeuron:
	
	def __init__(self):
		# 입력 데이터의 특성이 많아서 가중치와 절편을 미리 초기화하지 않았다.
		self.w = None
		self.b = None
	
	def forpass(self, x):
		z = np.sum(x * self.w) + self.b 		# 직선 방정식 계산
		return z

	def backprop(self, x, err):
		w_grad = x * err 					# 가중치에 대한 그래디언트 계산
		b_grad = 1 * err 					# 절편에 대한 그래디언트 계산
		return w_grad, b_grad  

	def  activation(self, z):
		a = 1 / (1 + np.exp(-z)) 			#시그모이드 계산
		return a
		
	# 훈련하는 메서드 구현하기
	def  fit(self, x, y, epochs = 100):
		self.w = np.ones(x.shape[1]) 		# 가중치 초기화
		self.b = 0  						# 절편 초기화
		for i in  range(epochs): 			# epochs만큼 반복
			for x_i, y_i in zip(x, y): 		# 모든 샘플에 대해 반복
				z = self.forpass(x_i) 		# 정방향 계산
				a = self.activation() 		# 활성화 함수 적용
				err = -(y_i - a) 			# 오차 계산
				w_grad, b_grad = self.backprop(x_i, err)	# 역방향 계산
				self.w -= w_grad 			# 가중치 업데이트
				self.b -= b_grad 			# 절편 업데이트
	
	# 예측하는 메서드 구현하기
	def  predict(self, x):
		z = [self.forpass(x_i) for x_i in x]		# 정방향 계산
		a = self.activation(np.array(z))		# 활성화 함수 적용
		return a > 0.5  				# 계단 함수 적용
```
### 로지스틱 회귀 모델 훈련시키기
#### 1. 모델 훈련하기
```python
neuron = LogisticNeuron()
neuron.fit(x_train, y_train)
```
#### 2. 테스트 세트 활용해서 모델의 정확도 평가하기
predict()의 반환값과 y_test 배열의 크기가 같으므로 바로 비교할 수 있다.
모든 배열의 비교 결과의 평균을 구해서 출력하면 그것이 **정확도**가 된다.
```python
np.mean(neuron.predict(x_test)==y_test)
```
여기서 구현한 LogisticNeuron의 성능은 좋은 편이 아니기 때문에 실전에서는 사이킷런과 같은 안정적인 패키지를 사용하는 것이 좋다.
