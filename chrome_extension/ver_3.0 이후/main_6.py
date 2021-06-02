"""웹 라이브러리"""

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
import json

"""인공지능 라이브러리"""

# import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np

"""이미지 라이브러리"""

import cv2
import urllib.request
import requests
from io import BytesIO


"""이미지 크롤링, 모델 비교"""

app = Flask(__name__)
api = Api(app)
CORS(app)

model = load_model('./multi_cnn/model_saved.h5')

def yes_or_no(url, model):
    
    image_width = 64
    image_height = 64

    X = []

    res = requests.get(url)
    

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    
    
    image_nparray = np.asarray(bytearray(requests.get(url, headers=headers).content), dtype=np.uint8)
    image_bgr = cv2.imdecode(image_nparray, cv2.IMREAD_COLOR)
    image_rgb = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB)
    img = cv2.resize(image_rgb, (image_width, image_height))
    
    data = np.asarray(img)
    X.append(data)

    X = np.array(X)
    X = X.astype(float) / 255

    print(url)

    prediction = model.predict(X)
    pre_ans = prediction.argmax()
    pre_ans_str = ''

    if pre_ans == 0 or pre_ans == 1 or pre_ans == 2 or pre_ans == 3 or pre_ans == 4 or pre_ans == 5 or pre_ans == 6 or pre_ans == 7:
        pre_ans_str = "class a"
    elif pre_ans == 8:
        pre_ans_str = "class b"
    elif pre_ans == 9 or pre_ans == 10 or pre_ans == 11 or pre_ans == 12 or pre_ans == 13 or pre_ans == 14 or pre_ans == 15 or pre_ans == 16 or pre_ans == 17 or pre_ans == 18:
        pre_ans_str = "class d"
    elif pre_ans == 19:
        pre_ans_str = "class e"
    else:
        pre_ans_str = "non_ad"

        
        
    if pre_ans_str == "class a":
        return 'a'
    elif pre_ans_str == "class b":
        return 'b'
    elif pre_ans_str == "class d":
        return 'd'
    elif pre_ans_str == "calss e":
        return 'e'
    else:
        return 'n'
        
        
#         except:
#             pass
        
@app.route("/",methods=['GET','POST'])
def check():
    if request.method=='GET':
        
        url = request.args.get('url')
        if ".gif" in url:
            result = "absolute"
        else:
            result = yes_or_no(url, model)
        
        if result == 'a':
            config = {"class": "a"}
        elif result == 'b':
            config = {"class": "b"}
        elif result == 'd':
            config = {"class": "d"}
        elif result == 'e':
            config = {"class": "e"}
        elif result == 'n':
            config = {"class": "n"}
        elif result == "absolute":
            config = {"class" : "absolute"}
        else:
            config = {"class": "n"}
            
        result = json.dumps(config, ensure_ascii=False)
        
        return result

if __name__ == '__main__':
    app.run(debug=False, host= '0.0.0.0', port='4000')
