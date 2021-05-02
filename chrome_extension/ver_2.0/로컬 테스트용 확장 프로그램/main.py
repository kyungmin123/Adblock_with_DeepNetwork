from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/",methods=['GET','POST'])
def check():
    if request.method=='GET':
        url = request.args.get('url')
        #return jsonify({'data': str(url)})
        return jsonify({'isAd': "yes"})

if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port='4000')
