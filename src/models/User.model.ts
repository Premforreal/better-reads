/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model} from '@loopback/repository';

@model()
export class User extends Entity {

  /**
   * id
   * name
   * email
   * password (encoded ?)
   */

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
