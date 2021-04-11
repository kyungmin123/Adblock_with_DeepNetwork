from flask import Flask, request
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/getresult', methods=['POST'])
def getresult():
    if request.method == 'POST':
        input = request.get_json()
        # 이미지 url = input[src] 입니다.

        # 판단하는 부분        

        # 판단 결과 반환하는 부분
        config = {"isAd": "yes"}
        # config = {"isAd" : "no"}
        result = json.dumps(config, ensure_ascii=False)
        return result

if __name__ == '__main__':
    app.run(host= '0.0.0.0', port='4000')
