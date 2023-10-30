import {environment} from '@env';

export const APP_CONFIG: any = {
  SITE_URL: environment.url,
  API_URL: environment.url + '/api',
};
