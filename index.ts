import  {  readFile,WorkBook,utils } from 'xlsx';
import {existsSync} from 'fs';
import {join}  from 'path';
import { isNil } from 'ramda';

/**
 * Name of documents folder
 *
 * @var {String}
 */
const documentsDirname = 'documents'



/**
 * Class to read documents data
 *
 * @class DocumentsReader
 */
export default class DocumentsReader {
  document: WorkBook | null;
  /**
   * Class constructor
   *
   * @param {String} filename
   */
  constructor(filename:string) {
    this.document = this.readLocalFile(filename)
  }

  /**
 * Validates if file exists
 *
 * @param {String} filePath
 *
 * @returns {Boolean}
 */
private validatePath(filePath: string): boolean {
  return !!existsSync(filePath)
}

/**
 * Creates filepath to specific document
 *
 * @param {String} filename
 *
 * @returns {String}
 */
private makeDocumentPath(filename: string): string {
  return join(__dirname, documentsDirname, filename)
}

/**
 * Reads Excel file and converts is to json
 *
 * @param {String} filename
 *
 * @returns {Object}
 */
private readLocalFile(filename:string) : WorkBook | null {
  const filepath =this.makeDocumentPath(filename)

  return this.validatePath(filepath) ? readFile(filepath) as WorkBook : null
}

  /**
   * Retrieves spreadsheets content by names from document
   *
   * @param {...String} sheetnames
   *
   * @returns {Array} - Array of spreadsheets content
   */
  getSpreadsheetData(...sheetnames: string[]): Array<any> {
    if (isNil(this.document)) {
      return [];
    }

    return sheetnames.reduce((content, sheetname) => {
      const sheet = this.document?.Sheets[sheetname];
      if (sheet) {
        const toJson = utils.sheet_to_json(sheet) as never;
        content.push(toJson);
      }
      return content;
    }, [])
  }
}

