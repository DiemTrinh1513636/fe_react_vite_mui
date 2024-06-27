import { BE_PATH } from '@root/services/be/constant';
import axios, { Axios } from 'axios';

export class CategoryService {
  _axios: Axios;
  constructor() {
    this._axios = this.createAxiosInstance();
  }
  private createAxiosInstance() {
    return axios.create({
      baseURL: 'http://localhost:3001/api',
    });
  }

  async getFlatCategory(params?: {
    keyword?: string;
    parentId?: number;
    page?: number;
    limit?: number;
  }) {
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
