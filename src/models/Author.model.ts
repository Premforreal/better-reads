/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model} from '@loopback/repository';

@model()
export class Author extends Entity {


  /**
   * id
   * name
   * birth
   * death
   * nationality
   * description
   * image url
   */

  /**
   * one owner has many books
   */

  constructor(data?: Partial<Author>) {
    super(data);
  }
}

export interface AuthorRelations {

}

export type AuthorWithRelations = Author & AuthorRelations;
