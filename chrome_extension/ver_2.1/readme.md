# 😫 read me... (21.05.05 ver)
## 🌟 확장 프로그램 적용 방법
1. 파일들을 로컬에 받아주세요.
2. 크롬에서 chrome://extensions/ 로 접속
3. 오른쪽 상단에 개발자 모드 on
4. 왼쪽 상단에 압축 해제된 확장 프로그램을 로드합니다 클릭
5. program 폴더 선택
6. 적용 완료
## 🌟 확장 프로그램 실행 방법
1. 동아일보 페이지로 이동
2. 확장 프로그램 on
3. 페이지 새로고침
## 🙆‍♀️ 현재까지 해결된 것
- 확장 프로그램...  
- js와 python 연결  
- 페이지 내의 이미지 태그들의 (전부는 아니지만) 정보 받기  
- 이미지 링크 받아서 python 함수의 인자로 전달.  
- python 함수의 반환값 js 파일로 전달
- API 배포 완료... (로컬에서 파이썬 파일 실행할 필요가 없습니다.)
- `NameError: name 'model' is not defined` 에러 -> 모델을 한번만 로드해도 됩니다.
## 🙅‍♀️ 현재까지 해결하지 못한 것
- 일부 이미지들의 정보 받지 못함. (Div 태그의 background로 삽입되어있는 이미지들, iframe 내부의 일부 이미지들 등) 
- 목적하는 도메인에서만 작동하도록 하는 것 (토이프로젝트에서는 동아일보, 본 프로젝트에서는 스포츠조선)
- 동아일보에 맞췄던 필터(이미지 url 추출하는 방법)를 스포츠조선 기준으로 수정해야 합니다.
- `NameError: name 'PIL' is not define` 에러
- `requests.exceptions.MissingSchema: Invalid URL '': No schema supplied. Perhaps you meant http://?` 에러 (동아일보 -> 스포츠조선으로 사이트를 바꾸면서 추가된 에러로 추정됨.)
## 📋 결과 설명
- 광고인 것은 투명도 90%  
- 광고가 아닌것은 투명도 50%  
- 이미지 정보를 갖고 오지 않은 경우 투명도 0%  
## 📁 파일 설명
### program/manifest.json
크롬 확장프로그램에서 필요한 권한 같은 것들이 담겨있음.
### program/js/background.js
확장 프로그램 뒤쪽에서(?) 계속 실행되고 있는 스크립트.  
여기서는 adblock.js에서 메세지를 받아서 main.py로 전달하고, main.py에서 받은 응답을 adblock.js로 보내는 역할을 하고 있습니다.
### program/js/adblock.js
페이지가 완전히 로드될때마다 페이지 내부에 삽입되는 스크립트.  
페이지가 로드되면 페이지 내부의 img 태그들을 찾아내고, 각각의 src를 backgroud.js로 보내고, 받은 응답의 결과에 따라서 이미지를 안보이게 하는 역할을 하고 있습니다.
### api/main.py
background.js에서 오는 요청을 받고 모델을 통과시킨 결과를 응답합니다.
이미지 소스는 url 변수에 담겨 있습니다.  
