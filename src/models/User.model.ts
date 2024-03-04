/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Book} from './Book.model';
import {Review} from './Review.model';

@model()
export class User extends Entity {

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
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @belongsTo(() => Book)
  bookId: string;

  @hasMany(()=>Review)
  review:Review[]

  /**
   * one user has many books
   * one user has many reviews
   */

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {

}

export type UserWithRelations = User & UserRelations;
