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

## Output images

https://github.com/mukund0502/SudokuSolver/assets/84224791/a993152a-c43b-4193-b35f-281145636dea
![Screenshot output-4](https://github.com/mukund0502/SudokuSolver/assets/84224791/5acd3a6b-24c1-4a4f-b5d5-2920dbf0801a)
![Screenshot output-1](https://github.com/mukund0502/SudokuSolver/assets/84224791/c8f76c7a-4bd3-49e3-9345-4a8c15cccf2b)
![Screenshot output-2](https://github.com/mukund0502/SudokuSolver/assets/84224791/62ebcbe0-832f-4af0-a2e7-b6da8644ef44)
![Screenshot output-3](https://github.com/mukund0502/SudokuSolver/assets/84224791/426099a5-ce8b-4492-8aa8-4f78deeaff83)
![Screenshot output-5](https://github.com/mukund0502/SudokuSolver/assets/84224791/35efef57-2155-4e5e-8189-560afe772eca)
![Screenshot output-6](https://github.com/mukund0502/SudokuSolver/assets/84224791/36bb4a6f-22f6-4190-b880-2254e0f658f3)

## Acknowledgments

- Special thanks to the [OpenCV](https://opencv.org/) and [TensorFlow](https://www.tensorflow.org/) communities for their powerful tools in image processing and machine learning.
