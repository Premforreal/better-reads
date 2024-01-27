/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, hasMany, model, property} from '@loopback/repository';
import {Book} from './Book.model';

@model()
export class Author extends Entity {

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
    type:'string',
    required:true
  })
  nationality:string

  @property({
    type:'string',
    required:true
  })
  description:string

  @property({
    type:'string',
    required:true
  })
  imageUrl:string

  @property({
    type: 'date',
    required: true,
  })
  birth: Date;

  @property({
    type: 'date',
    required: false,
  })
  death?: Date;

  @hasMany(() => Book)
  books: Book[];

  constructor(data?: Partial<Author>) {
    super(data);
  }
}

export interface AuthorRelations {

}

export type AuthorWithRelations = Author & AuthorRelations;
