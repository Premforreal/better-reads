/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model} from '@loopback/repository';

@model()
export class Review extends Entity {


  /**
   * id
   * bookId
   * UserId
   * Rating
   * Title
   * Decription
   */

  /**
   * one review is for one book
   * one review is from one user
   */

  constructor(data?: Partial<Review>) {
    super(data);
  }
}

export interface ReviewRelations {

}

export type ReviewWithRelations = Review & ReviewRelations;
