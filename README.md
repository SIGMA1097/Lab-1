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

These lines of code output the dataset's first few rows (studentper.head()), produce descriptive statistics for the dataset (studentper.describe()), and employ plt.hist() to construct histograms for a number of columns (health, studytime, leisure time, going out, absences, G1, G2, and G3). After that, plt.show() is used to display the histograms.
These lines determine the dataset's correlation matrix (corr_matrix = studentper.corr()), then display it (corr_matrix). After that, it does a descending order sort of the correlation values for the column "G3" (corr_matrix["G3"].sort_values(ascending=False)).

The pairplot function from Seaborn is used in this line to build a pairwise scatter plot matrix that displays the connections between the dataset's variable pairs.
These lines make a copy of the initial dataset and store it in the studentCopy variable. After that, the copy is shown.

In this case, the code uses the drop function with axis=1 (column-wise) to eliminate the columns designated in the labels list ('Mjob', 'Fjob','reason', and 'guardian') from the studentper dataset. The updated dataset is shown after the modifications are made in-place (inplace=True).

These lines use studentper.isnull().sum() to determine whether the dataset has any missing values, replace any instances of '?' with np.nan (indicating missing values), and then use studentper.info() to display dataset details.
These lines determine which rows (null_rows_idx) have at least one NaN value and then display the first 10 missing-value rows in the dataset.
Here, one-hot encoding (pd.get_dummies(studentper)) is used to encode the categorical variables in the dataset. pd.set_option('display.max_columns', None) guarantees that all columns are visible when the dataset is printed. The encoded dataset that results is assigned to the variable encoded_studentCopy.

These lines divide the target variable (dependent variable) from the characteristics (independent variables) in the machine learning model. 

From sklearn.preprocessing, these lines import the StandardScaler class. It first creates a StandardScaler instance with the name std_scaler, and then uses the fit_transform method to standardise the features in X. In this stage, the features are scaled to have a mean of 0 and a variance of 1.

The train_test_split function is imported in this code from sklearn.model_selection. The data is divided into training and testing sets, with 80% of the data used for training and 20% for testing. X_train, X_test, Y_train, and Y_test are the feature and target variables, respectively. To ensure consistency, the random_state argument is set to 42. To confirm the sizes, each split's shape is printed.

These lines import the sklearn.linear_model's LinearRegression class. The code creates two LinearRegression instances: one as LinearModel (not used later) and the other as lin_reg. Using the fit approach, the lin_reg model is trained using the training set of data.These lines import the sklearn.linear_model's LinearRegression class. The code creates two LinearRegression instances: one as LinearModel (not used later) and the other as lin_reg. Using the fit approach, the lin_reg model is trained using the training set of data.These lines import the sklearn.metrics methods called mean_absolute_error and mean_squared_error. Between the predicted values (y_pred) and the actual values (y_test), the code computes the mean absolute error (MAE) and mean squared error (MSE). Printing displays the calculated mistakes.

From sklearn.linear_model, the Ridge class is imported in these lines. The programme generates a RidgeRegression instance with an alpha value of 1. The target variable for the test set (X_test) is then predicted after fitting the Ridge model to the training data (X_train and y_train). Ridge regression's MAE and MSE are computed and printed. the sklearn.linear_model Lasso class. The programme generates a LassoRegression instance with an alpha value of 1. The target variable for the test set (X_test) is then predicted after fitting the Lasso model to the training data (X_train and y_train). For Lasso regression, the MAE and MSE are computed and printed.

The metrics for each model's evaluation are shown in these lines. For the Lasso, Ridge, and linear regression models, the mean absolute error (MAE) and mean squared error (MSE) are displayed.

The feature variable "G2" and the target variable "G3" from the original dataset (studentper) are visualised using a scatter plot created by this code using plt.scatter(). Plt.show() is used to display the plot.
The programme executes a number of data preprocessing operations, divides the data into training and testing sets, trains and assesses various regression models (linear regression, Ridge regression, Lasso regression), and displays the relationship between two variables in the dataset.


















