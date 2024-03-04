/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Author, AuthorWithRelations} from './Author.model';
import {Review} from './Review.model';
import {User} from './User.model';

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

  @property({
    type:'string',
    required:true
  })
  imageUrl:string

  @property({
    type:'string',
    required:true
  })
  genre:string

  @property({
    type:'string',
    required:true
  })
  language:string

  @belongsTo(() => Author)
  authorId: string;

  @hasMany(() => Review)
  reviews: Review[];

  @hasMany(() => User)
  users: User[];

  /**
   * one book has one author
   * one book has many reviews
   */

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  author?: AuthorWithRelations;
}

export type BookWithRelations = Book & BookRelations;
