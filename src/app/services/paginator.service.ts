import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor() { }

  private resetPaginatorSource = new Subject<void>();
  resetPaginator$ = this.resetPaginatorSource.asObservable();

  resetPaginator() {
    this.resetPaginatorSource.next();
  }
}
