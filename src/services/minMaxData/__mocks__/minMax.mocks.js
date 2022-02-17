import { axiosMockAdapterInstance } from '../../../lib/axios';
import { minMax } from './data/minMax.data';
import { minMaxList } from './data/minMaxList.data';

axiosMockAdapterInstance.onGet(new RegExp('min-max')).reply(() => {
  return [200, minMax];
});

axiosMockAdapterInstance.onGet(new RegExp('list-range')).reply(() => {
  return [200, {list:[...minMaxList]}];
});
