/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model} from '@loopback/repository';

@model()
export class Book extends Entity {


  /**
   * id
   * isbn
   * name
   * author
   * genre
   * date
   * language
   * image url
   */

  /**
   * one book has one owner
   * one book has many reviews
   */

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {

}

export type BookWithRelations = Book & BookRelations;
