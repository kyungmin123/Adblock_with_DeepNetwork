# majority voting 기법을 통한 모델 개발 #

+ 이미지를 분할하여 훈련 및 테스트
+ 분할된 이미지(홀수)로 투표를 하여 광고와 비광고 구분 
+ 구분하려는 대상이 단순할수록 효과가 높음

### __단순 이진 분류 - binary__ ###
---

+ 테스트 결과
  + Layers = 8
  + Image size = 원본 : 180, 180 / 분할된 이미지 : 90, 90
  + Epoch = 40
  + Batch size = 32
  + Dropout = 0 (batch normalization으로 대체)
  + Optimizer = rms
  + Learning rate = 0.009
+ 정확도 : 93.27%

### __이진 카테고리 분류 - categorical binary cnn__###
---

+ 테스트 결과
  + Layers = 8
  + Image size = 원본 : 280, 280 / 분할된 이미지 : 140, 140
  + Epoch = 40
  + Batch size = 64
  + Dropout = 0.1
  + Optimizer = rms
+ 정확도 : 48.49% (광고/비광고 정확도), 11.11%(카테고리 개별 정확도)
