import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  imports: [
    HttpClientModule, // добавьте этот импорт
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // ...
  ],
  // ...
})
export class AppModule { }
