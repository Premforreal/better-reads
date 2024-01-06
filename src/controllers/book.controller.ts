import {Filter, repository} from '@loopback/repository';
import {HttpErrors, get, getModelSchemaRef, param, post, requestBody, response} from '@loopback/rest';
import {Book} from '../models';
import {BookRepository} from '../repositories';

export class BookController {
  constructor(
    @repository(BookRepository)
    public bookRepository: BookRepository,
  ) {}

  @post('/books')
  @response(200, {
    description: 'Bill model instance',
    content: {'application/json': {schema: getModelSchemaRef(Book)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Book, {
            title: 'NewBook',

          }),
        },
      },
    })
    book: Book,
  ): Promise<Book> {
    try {
      return await this.bookRepository.create(book);
    } catch (error) {
      throw new HttpErrors.InternalServerError(error);
    }
  }

  @get('/books')
  @response(200, {
    description: 'Bill model instance',
    content: {'application/json': {schema: getModelSchemaRef(Book)}},
  })
  async find(
    @param.filter(Book) filter?: Filter<Book>,
  ): Promise<Book[]> {
    try{
      return await this.bookRepository.find(filter);
    } catch (error) {
      throw new HttpErrors.InternalServerError(error);
    }
  }



}
