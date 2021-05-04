# 크롬 확장 프로그램 + api 개발 Note

상세 기록은 [노션](https://www.notion.so/Web-Note-c69169ca89a942b2881b4305bb1b9edd)에

## Ver 1.0 (21.04.10)

### 🙆‍♀️ 구현된 것

- 확장 프로그램...
- js와 python 연결
- 페이지 내의 이미지 태그들의 (전부는 아니지만) 정보 받기
- 이미지 링크 받아서 python 함수의 인자로 전달.
- python 함수의 반환값 js 파일로 전달

### 🙅‍♀️ 구현하지 못한 것

- 서버 (현재는 직접 로컬 서버를 구동해야만 정상적으로 작동이 됩니다.)
- 일부 이미지들의 정보 받지 못함. (Div 태그의 background로 삽입되어있는 이미지들, iframe 내부의 일부 이미지들)
- 동아일보 도메인에서만 작동하도록 하는 것

## Ver 2.0 (21.05.02)

### 🙆‍♀️ 구현된 것

- 확장 프로그램...
- js와 python 연결
- 페이지 내의 이미지 태그들의 (전부는 아니지만) 정보 받기
- 이미지 링크 받아서 python 함수의 인자로 전달.
- python 함수의 반환값 js 파일로 전달
- 서버(Heroku를 사용하여 api 배포 완료)

### 🙅‍♀️ 구현하지 못한 것

- 일부 이미지들의 정보 받지 못함. (Div 태그의 background로 삽입되어있는 이미지들, iframe 내부의 일부 이미지들)
- 동아일보 도메인에서만 작동하도록 하는 것
- 모델을 올렸을 때 발생하는 api 내부 에러 (`NameError: name 'model' is not defined`, `NameError: name 'PIL' is not defined`)

## Ver 2.1 (21.05.05)

### 🙆‍♀️ 개선된 것

- `NameError: name 'model' is not defined` 해결

### 🙅‍♀️ 해결하지 못한 것

- 일부 이미지들의 정보 받지 못함. (Div 태그의 background로 삽입되어있는 이미지들, iframe 내부의 일부 이미지들)
- 목적 도메인에서만 작동하도록 하는 것 (5/3 이후로 동아일보 -> 스포츠조선으로 변경)
- `NameError: name 'PIL' is not defined`
- `requests.exceptions.MissingSchema: Invalid URL '': No schema supplied. Perhaps you meant http://?`
