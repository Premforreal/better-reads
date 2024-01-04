/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model} from '@loopback/repository';

@model()
export class UserBook extends Entity {

  /**
   * id
   * userId
   * bookId
   */

  constructor(data?: Partial<UserBook>) {
    super(data);
  }
}

export interface UserBookRelations {

}

export type UserBookWithRelations = UserBook & UserBookRelations;
