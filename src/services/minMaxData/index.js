import { axiosMockInstance } from '../../lib/axios';

class MinMaxDataService {
  get() {
    return axiosMockInstance.get('min-max').then((axiosResponse) => ({ ...axiosResponse.data }));
  }

  getList() {
    return axiosMockInstance.get('list-range').then((axiosResponse) => ({ ...axiosResponse.data }));
  }
}

export const minMaxDataService = new MinMaxDataService();
