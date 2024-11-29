import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideToastr} from 'ngx-toastr';
import {provideHttpClient, withFetch, HTTP_INTERCEPTORS, withInterceptors, withInterceptorsFromDi  } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [


    provideAnimations(),
    provideToastr(),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi(),//obligatorio para el token
    ), //post,put,delete,set
    
    //obligatorio para el token
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },



    ReactiveFormsModule, //para el registro
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),

  ]
};
