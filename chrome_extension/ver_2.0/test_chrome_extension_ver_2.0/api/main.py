from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

import tensorflow as tf
import tensorflow.keras as keras
from tensorflow.keras.models import load_model

import numpy as np

from PIL import UnidentifiedImageError # 사진 못 받아왔을 때 에러 except
from PIL import Image
from PIL import ImageFile

import urllib.request
import requests

from io import BytesIO

import json

ImageFile.LOAD_TRUNCATED_IMAGES = True # 잘린 이미지 수복 (OS Error truncated)

app = Flask(__name__)
api = Api(app)
CORS(app)

def yes_or_no(url, model):
    
    image_w = 64
    image_h = 64

    pixels = image_h * image_w * 3

    X = []

    res = requests.get(url)
    
    try:
        img = Image.open(BytesIO(res.content))
        
        img = img.convert("RGB")
        img = img.resize((image_w, image_h))
        data = np.asarray(img)

        X.append(data)

        X = np.array(X)
        X = X.astype(float) / 255

        print(url)
        model = load_model('./ad_non_ad_classify.model')
        prediction = model.predict(X)

        if prediction >= 0.5:
            return 1
        else :
            return 0

    except PIL.UnidentifiedImageError:
        return -1

if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port='4000')

@app.route("/",methods=['GET','POST'])
def check():
    if request.method=='GET':
        url = request.args.get('url')
        result = yes_or_no(url, model)
        if result == 1:
            config = {"isAd": "no"}
        elif result == 0:
            config = {"isAd": "yes"}
        else:
            config = {"isAd": "no"}
        result = json.dumps(config, ensure_ascii=False)
        return result
