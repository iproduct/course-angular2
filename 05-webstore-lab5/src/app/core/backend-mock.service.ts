import { Injectable, Inject, forwardRef } from '@angular/core';
import { Identifiable, ResourseType, IdType } from '../shared/shared-types';
import { PRODUCTS_TOKEN } from './injection-tokens';

@Injectable()
export class BackendMockService {
  private static nextId = 1;

  constructor(@Inject(PRODUCTS_TOKEN) private products: Identifiable[]) {
    this.products.forEach(p => p.id = BackendMockService.nextId++ + '');
  }

  async find<T extends Identifiable> (kind: ResourseType<T>): Promise<T[]> {
    const collection = this.getCollection(kind.typeId);
    return [...collection] as T[];
  }

  add<T extends Identifiable> (kind: ResourseType<T>, entity: T): Promise<T> {
    entity.id = BackendMockService.nextId++ + '';
    const collection = this.getCollection(kind.typeId);
    collection.push(entity);
    return Promise.resolve(entity as T);
  }

  update<T extends Identifiable> (kind: ResourseType<T>, entity: T): Promise<T> {
    const collection = this.getCollection(kind.typeId);
    const index = collection.findIndex(e => e.id === entity.id);
    collection[index] = entity;
    return Promise.resolve(entity as T);
  }

  delete<T extends Identifiable> (kind: ResourseType<T>, id: IdType): Promise<T> {
    const collection = this.getCollection(kind.typeId);
    const index = collection.findIndex(e => e.id === id);
    const entity = collection.splice(index, 1)[0];
    return Promise.resolve(entity as T);
  }

  getCollection(collectionName): Identifiable[] {
    switch (collectionName) {
      case 'Product': return this.products;
      // case 'User': return this.users;
    }
  }

}
