import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // 1. Importe isso aqui


import { routes } from './app.routes';
import {
    PrivateIdentifier
} from '../../../meu-primeiro-app - Copia/node_modules/@types/estree/index.d';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
