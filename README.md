# Lab-1
Artificial Intelligence in Enterprise Systems - Lab1
The duties carried out by the code you gave are as follows:

## Bringing in Libraries:

Model training and assessment are two common machine learning operations that make use of the sklearn package.
Python routines for numerical calculations and array manipulation are provided by numpy (imported as np).
A strong library for data manipulation and analysis, pandas (imported as pd) provides data structures and capabilities for working with structured data.
matplotlib.A plotting package called pyplot (imported as plt) is used to make visualisations like graphs and charts.
A high-level interface for producing eye-catching and educational statistics visualisations is called seaborn (imported as sb).

### Dataset loading:

The dataset's location's URL is stored in the variable url.
The CSV file from the given URL is read using the pd.read_csv() function from the pandas package.
The semicolon (;) in the CSV file's separator is indicated by the sep=";" argument. For the data to be properly parsed, this is crucial.
The variable studentper is given the loaded dataset, and it will hold the data in tabular form.
Presentation of the Dataset:

The dataset's initial few rows are shown using the studentper.head() function. With the help of this function, you may quickly see the table's actual data and the names of its columns by viewing a preview of the data.
Head() by default only shows the dataset's top five rows. 

The code studentper.head() initial few rows are shown using the studentper.head() function. A brief preview of the data in the DataFrame is given. The DataFrame's first five rows are shown by default.

Make sure the dataset has already been loaded into the studentper DataFrame using the previous code you gave before using this code:
You can gain a basic sense of the dataset's structure and contents by running studentper.head(), which displays the first five rows of the dataset.
