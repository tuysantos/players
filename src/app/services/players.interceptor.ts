import { HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable()
export class PlayersInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('user credentials', btoa(this.storageService.getUserName() + ':' + this.storageService.getUserPassword()))
    request = request.clone({
      setHeaders: {
        'x-access-token': btoa(this.storageService.getUserName() + ':' + this.storageService.getUserPassword())
      }
    });

    return next.handle(request);
  }
}