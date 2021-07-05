import { libraryDbType as LibraryDbType } from '../../dbTypes/__generatedFromBackend__/types/libraryDbType'

export class LibraryDbClass implements LibraryDbType {
id?: number;
bookCathegories?: string[];
numberOfBook: number;
userId?: number;
 nodeId?: string;

  constructor(id?: number,bookCathegories?: string[],numberOfBook: number,userId?: number, nodeId?: string,) {
    this.id = id
    this.bookCathegories = bookCathegories
    this.numberOfBook = numberOfBook
    this.userId = userId
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}