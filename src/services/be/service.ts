import { BE_PATH } from '@root/services/be/constant';
import { TCategory, TCategoryWithParentId } from '@root/shared/types/category';
import { Pagination } from '@root/shared/types/common';
import axios, { Axios } from 'axios';

export class CategoryService {
  _axios: Axios;
  constructor() {
    this._axios = this.createAxiosInstance();
  }
  private createAxiosInstance() {
    return axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

  async getFlatCategoryWithParentId(): Promise<TCategoryWithParentId[]> {
    const response = await this._axios
      .get(BE_PATH.GET_FLAT_CATEGORY_WITH_PARENT_ID)
      .then((data) => data.data)
      .catch((error) => {
        console.log(error);
      });
    return response.data;
  }

  async getFlatCategory(params?: {
    keyword?: string;
    page?: number;
    limit?: number;
  }): Promise<Pagination<TCategory>> {
    const response = await this._axios
      .get(BE_PATH.GET_FLAT_CATEGORY, {
        params,
      })
      .then((data) => data.data)
      .catch((error) => {
        console.log(error);
      });
    return response.data;
  }
}
