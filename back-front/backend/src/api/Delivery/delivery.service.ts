import { CategoryModel } from './delivery.model';

export class CategoryService {
  async getCategories() {
    return CategoryModel.find().exec();
  }
}
