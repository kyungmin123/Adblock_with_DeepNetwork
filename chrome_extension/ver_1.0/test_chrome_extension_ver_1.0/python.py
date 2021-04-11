from PIL import Image
import os, glob, numpy as np
from tensorflow.keras.models import load_model
import tensorflow as tf
from flask import Flask, request
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

def yes_or_no(url):

  seed = 5
  tf.random.set_seed(seed)
  np.random.seed(seed)

  image_w = 64
  image_h = 64

  pixels = image_h * image_w * 3

  X = []
  filenames = []

  img = request.urlopen(a).read

  img = img.convert("RGB")
  img = img.resize((image_w, image_h))
  data = np.asarray(img)

  filenames.append(f)
  X.append(data)
      
  X = np.array(X)
  X = X.astype(float) / 255

  model = load_model('./model/ad_non_ad_classify.model')

  prediction = model.predict(X)

  if prediction >= 0.5:
    return 1
  else :
    return 0


@app.route('/getresult', methods=['POST'])
def getresult():
    if request.method == 'POST':
        input = request.get_json() # 이미지 url = input[src] 입니다.
        # 판단하는 부분        
        result = yes_or_no(input["src"])
        # 판단 결과 반환하는 부분
        if(result == 1):
            config = {"isAd": "yes"}
        else:
            config = {"isAd" : "no"}
        result = json.dumps(config, ensure_ascii=False)
        return result

if __name__ == '__main__':
    app.run(host= '0.0.0.0', port='4000')
