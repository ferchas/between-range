import { axiosMockAdapterInstance } from '../../../lib/axios';
import { minMax } from './data/minMax.data';

axiosMockAdapterInstance.onGet(new RegExp('min-max')).reply(() => {
  return [200, minMax];
});
