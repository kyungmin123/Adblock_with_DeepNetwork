"""웹 라이브러리"""

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
import json

"""인공지능 라이브러리"""

import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np

"""이미지 라이브러리"""

import cv2
import urllib.request
import requests
from io import BytesIO

# from PIL import UnidentifiedImageError # 사진 못 받아왔을 때 에러 except
# from PIL import Image
# from PIL import ImageFile

# ImageFile.LOAD_TRUNCATED_IMAGES = True # 잘린 이미지 수복 (OS Error truncated)


app = Flask(__name__)
api = Api(app)
CORS(app)

model = load_model('./multi_cnn/model_saved.h5')

def yes_or_no(url, model):
    
    image_w = 64
    image_h = 64

    X = []

    res = requests.get(url)
    
#     try:
#         img = Image.open(BytesIO(res.content))
        
#         img = img.convert("RGB")
#         img = img.resize((image_w, image_h))
#         data = np.asarray(img)

#         X.append(data)

#         X = np.array(X)
#         X = X.astype(float) / 255

#         print(url)

#         prediction = model.predict(X)

#         if prediction >= 0.5:
#             return 1
#         else :
#             return 0

#     except PIL.UnidentifiedImageError:
#         return -1
    
    
#     try:
    img = Image.open(BytesIO(res.content))


    image_bgr = cv2.imread(img, cv2.IMREAD_COLOR)
    image_rgb = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB)

    img = cv2.resize(image_rgb, (image_width, image_height))
    data = np.asarray(img)

    X.append(data)

    X = np.array(X)
    X = X.astype(float) / 255

    print(url)

    prediction = model.predict(X)
    pre_ans = i.argmax()
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
        else:
            config = {"class": "n"}
            
        result = json.dumps(config, ensure_ascii=False)
        return result

if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port='4000')
