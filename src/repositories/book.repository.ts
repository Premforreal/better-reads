import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BetterReadsDataSource} from '../datasources';
import {Book, BookRelations} from '../models';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.id,
  BookRelations
> {
  constructor(
    @inject('datasources.betterReads') dataSource: BetterReadsDataSource,
  ) {
    super(Book, dataSource);

    (this.modelClass as any).observe('persist', async (ctx: any) => {
      ctx.data.modified = new Date();
    });

  }
}
