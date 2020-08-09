import { InjectionToken } from "@angular/core";
import { AppConfig } from './app.config';
import { environment } from '../environments/environment';

export const APP_SERVICE = new InjectionToken<AppConfig>('appConfig');

export const APP_CONFIG: AppConfig = {
  apiEndPoint: environment.apiEndPoint ,
  jsonAPi: environment.jsonAPi
}
