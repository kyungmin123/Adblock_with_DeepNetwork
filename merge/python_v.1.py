from flask import Flask, request
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/getresult', methods=['POST'])
def getresult():
    if request.method == 'POST':
        input = request.get_json()
        config = {"isAd": "yes"}
        result = json.dumps(config, ensure_ascii=False)
        return result

if __name__ == '__main__':
    app.run(host= '0.0.0.0', port='4000')
