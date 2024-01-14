# Sudoku Solver with Image Processing

## Overview

This Sudoku Solver is a web application that utilizes image processing techniques to solve Sudoku puzzles. Users can input Sudoku puzzles manually or upload an image of an unsolved Sudoku grid, and the application will use computer vision and machine learning algorithms to recognize the digits and solve the puzzle.

## Features

- **Manual Input:** Users can manually input a Sudoku puzzle by entering the digits into the provided grid.
  
- **Image Processing:** The application supports solving Sudoku puzzles from images. It uses OpenCV for image processing and TensorFlow with a Convolutional Neural Network (CNN) for digit recognition.

- **Real-Time Sudoku Solving:** As users input or upload Sudoku puzzles, the application dynamically solves the puzzle in real-time, providing instant feedback.

- **Flask Backend:** The backend is built using Flask, a lightweight web framework for Python, providing the server-side logic for the application.

## Prerequisites

- [Python](https://www.python.org/) installed
- [Flask](https://flask.palletsprojects.com/en/2.0.x/) installed (`pip install Flask`)
- [OpenCV](https://opencv.org/) installed (`pip install opencv-python`)
- [TensorFlow](https://www.tensorflow.org/) installed (`pip install tensorflow`)

## Usage

1. Clone the repository: `git clone https://github.com/mukund0502/SudokuSolver.git`
2. Navigate to the project directory: `cd SudokuSolver`
3. Install dependencies: `pip install -r requirements.txt`
4. Run the Flask application: `python app.py`
5. Open your browser and go to `http://localhost:5000` to access the Sudoku Solver.

## How It Works

- The application uses a Convolutional Neural Network (CNN) trained with TensorFlow to recognize digits in the Sudoku grid from images.
- OpenCV is employed for image processing tasks such as grid detection and digit extraction.
- The solved Sudoku grid is displayed in real-time as the user inputs the puzzle or uploads an image.


## Acknowledgments

- Special thanks to the [OpenCV](https://opencv.org/) and [TensorFlow](https://www.tensorflow.org/) communities for their powerful tools in image processing and machine learning.
