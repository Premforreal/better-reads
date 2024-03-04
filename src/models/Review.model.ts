/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Book} from './Book.model';
import {User} from './User.model';

@model()
export class Review extends Entity {

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
    required: true
  })
  Title:string

  @property({
    type: 'string',
    required: true
  })
  Description:string

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minLength: 1,
      maxLength: 5
    }
  })
  Rating:number//1-5

  @belongsTo(() => User)
  UserId: string;

  @belongsTo(() => Book)
  BookId: string;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}

export interface ReviewRelations {

}

export type ReviewWithRelations = Review & ReviewRelations;
