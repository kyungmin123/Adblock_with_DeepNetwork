# 다양한 CNN 모델 개발 #

### __단순 이진 분류 - binary__ ###
---

+ 광고 / 비광고만 분류
+ 광고와 비광고를 구분하는 명확한 특징이 없어 정확도가 높지 않음

+ 테스트 결과
  + Layers = 7
  + Image size = 140, 140
  + Epoch = 40
  + Batch size = 32
  + Dropout = 0.15
  + Optimizer = rms
  + Learning rate = 0.008
+ 정확도 : 


### __이진 카테고리 분류 - categorical binary cnn__ ###
---

+ 다중 카테고리를 이용하여 광고 / 비광고 분류
  + 특징이 있는 카테고리를 선별하여 광고 분류에 도움
+ 개별 정확도는 높지 않지만 어느정도 특징이 있는 이미지들을 구분해주기 때문에 정확도 향상에 도움이 되었음

+ 테스트 결과
  + Layers = 7
  + Image size = 140, 140
  + Epoch = 40
  + Batch size = 64
  + Dropout = 0.15
  + Optimizer = SGD
  + Learning rate = 0.01 (momentum = 0.9)
+ 정확도 : 70.31% 

### __다중 카테고리 분류 - multi cnn__ ###
---

+ 다중 카테고리를 이용하여 광고 유형까지 구분할 수 있음
+ 개별 정확도가 낮아 실제로 구분하기에는 어려움이 있음
 
+ 테스트 결과
  + Layers = 8 
  + Image size = 120, 120
  + Epoch = 40
  + Batch size = 32
  + Dropout = 0.1
  + Optimizer = Adagrad
  + Learning rate = 0.01
+ 정확도 : 38.43%
