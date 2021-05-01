#from flask import Flask, jsonify, request
#from flask_restful import Resource, Api

#app = Flask(__name__)
#api = Api(app)

##@app.route('/check/<string:name>')  # url pattern으로 name 설정
##class hello(Resource):
##    def get(self, name):  # 멤버 함수의 파라미터로 name 설정
##        return {"message" : "Welcome, %s!" %name}
##    

#@app.route("/",methods=['GET','POST'])
#def Sum():
#    if request.method=='GET':
#        url = request.args.get('url')
#        return jsonify({'data': "haha"})

###api.add_resource(Sum, '/add/<string:a>')

#if __name__ == "__main__":
#    app.run(debug=True, host='0.0.0.0', port=80)

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
