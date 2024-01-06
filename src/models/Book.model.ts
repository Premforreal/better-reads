/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model()
export class Book extends Entity {

  @property({
    type: 'date',
    default: () => new Date()
  })
  created ? : string;

  @property({
    type: 'date',
    default: () => new Date()
  })
  modified ? : string;


  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  isbn: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minLength: 4,
      maxLength: 4
    }
  })
  year: number;

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
