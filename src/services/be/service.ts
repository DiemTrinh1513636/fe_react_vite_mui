import { BE_PATH } from '@root/services/be/constant';
import {
  TCategory,
  TCategoryNested,
  TCategoryWithDepthPath,
  TCategoryWithParentId,
} from '@root/services/be/types/category';
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

  async getFlatCategory(params?: {
    keyword?: string;
    page?: number;
    limit?: number;
  }): Promise<Pagination<TCategory>> {
    const response = await this._axios
      .get(BE_PATH.GET_FLAT_CATEGORY, {
        params,
      })
      .then((res) => res.data.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
    return response;
  }

  async getNestedCategory(): Promise<TCategoryNested[]> {
    const response = await this._axios
      .get(BE_PATH.GET_NESTED_CATEGORY)
      .then((res) => res.data.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
    return response;
  }

  async getFlatCategoryWithParentId(): Promise<TCategoryWithParentId[]> {
    const response = await this._axios
      .get(BE_PATH.GET_FLAT_CATEGORY_WITH_PARENT_ID)
      .then((res) => res.data.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
    return response;
  }

  async getFlatCategoryWithDepth(): Promise<TCategoryWithDepthPath[]> {
    const response = await this._axios
      .get(BE_PATH.GET_FLAT_CATEGORY_WITH_DEPTH_PATH)
      .then((res) => res.data.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
    return response;
  }
}
