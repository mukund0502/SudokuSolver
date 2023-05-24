from flask import Flask, render_template, redirect, request, url_for, flash
from werkzeug.utils import secure_filename
from SudokuExtractor import extract_sudoku
import os
import cv2
from tensorflow.keras import models
import numpy as np 
UPLOAD_FOLDER = './static'

predicted_array = np.zeros(0).astype('int')

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods = ['POST', 'GET'])
def index():
    return render_template('index.html', predicted_array = predicted_array)

@app.route('/again', methods = ['POST', 'GET'])
def again():
    if request.method == 'POST':
        filee = request.files['sudoku']
        print(1, filee.filename)
        path = os.path.join(app.config['UPLOAD_FOLDER'], filee.filename)
        filee.save(path)
        pathh = f"./static/{filee.filename}"
        extracted_sudoku = extract_sudoku(pathh)
        print(extracted_sudoku)
        predicted_array = convert2numberarray(extracted_sudoku)
        
        os.remove(f"./static/{filee.filename}")
        return render_template('index.html', predicted_array = predicted_array)
    else:
        return render_template('index.html', predicted_array = predicted_array)




def convert2numberarray(extracted_sudoku):
    images = []
    for i in range(0,9):
        for j in range(0,9):
            pred = extracted_sudoku[(i)*30:(i)*30+28, (j)*30:(j)*30+28]
            # cv2.imshow('pred', pred)
            # cv2.waitKey(0)
            pred = pred/255
            pred = pred.reshape(28,28,1)
            images.append(pred)
    


    cnn_model = models.load_model(f"Sudoku_model/model.h5")
    prediction = cnn_model.predict(np.array(images))
    predicted = []

    for i in range(0,prediction.shape[0]):
        number = 0
        for k in range(0, prediction[i].shape[0]):
            if(prediction[i][k]>0.65):
                number = k
        predicted.append(number)

    print(predicted)
    print(len(images))

    return predicted

if __name__ == '__main__':
    app.run(debug=True)