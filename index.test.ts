import { mock } from 'ts-mockito';
import DocumentsReader from './index';
import { WorkBook } from 'xlsx';

// Sample test suite for DocumentsReader
describe('DocumentsReader', () => {
  // Test case for the getSpreadsheetData method
  describe('getSpreadsheetData', () => {
    it('should return an array of spreadsheet content', () => {

      let mockedXlsx:WorkBook = mock();
      // Arrange
      const reader = new DocumentsReader('file_example.xlsx');

      // Act
      const result = reader.getSpreadsheetData('Sheet1');

      // Assert
      expect(result).toEqual(expect.any(Array));
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return an empty array if document is nil', () => {
      // Arrange
      const reader = new DocumentsReader('nonexistent.xlsx');

      // Act
      const result = reader.getSpreadsheetData('Sheet1');

      // Assert
      expect(result).toEqual([]);
    });
  });
});
