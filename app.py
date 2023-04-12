from flask import Flask, render_template, redirect, request, url_for
# from SudokuExtractor import extract_sudoku
import cv2

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/again', methods = ['POST', 'GET'])
def again():
    if request.method== 'POST':
        img = request.form.get('sudoku')
        cv2.imshow('window', img)
        cv2.waitKey(0)
        print(img)
        return redirect(url_for('index'))
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)