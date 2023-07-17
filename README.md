Documents Reader
Documents Reader is a TypeScript class that provides functionality to read and process documents, specifically Excel files. It utilizes the xlsx library to parse Excel files and convert them to JSON format.

Installation
To use the Documents Reader class, follow these steps:

Clone the repository or download the source code.

Install the dependencies by running the following command:

```
npm install
```


Usage
To use the Documents Reader class, follow the steps below:

Import the DocumentsReader class into your TypeScript file:


```
import DocumentsReader from './DocumentsReader';
```
Create an instance of the DocumentsReader class, providing the filename of the Excel file to be read:


```
const reader = new DocumentsReader('filename.xlsx');
```

Use the available methods to retrieve and process the data from the Excel file:

getSpreadsheetData: Retrieves the content of specified spreadsheets from the document.

getSpreadsheetGroupedByColumn: Retrieves the content of a specific spreadsheet and groups it by a specified column.

See the example below:


```ruby
const spreadsheetData = reader.getSpreadsheetData('Sheet1', 'Sheet2');
console.log(spreadsheetData);
```


Configuration
The Documents Reader class expects the Excel files to be located in a "documents" folder relative to the execution location. The folder name can be modified by changing the documentsDirname constant in the code.

Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License. See the LICENSE file for more information.

Feel free to modify this README file to fit your specific needs. Include additional sections or information that you think would be helpful for users of your code.