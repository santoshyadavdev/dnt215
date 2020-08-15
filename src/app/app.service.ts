import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
import { AppConfig } from './app.config';

export const APP_SERVICE = new InjectionToken<AppConfig>('appConfig');

export const APP_CONFIG: AppConfig = {
  apiEndPoint: environment.apiEndPoint ,
  jsonAPi: environment.jsonAPi
};
