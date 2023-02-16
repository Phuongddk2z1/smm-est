import { NzButtonSize } from 'ng-zorro-antd/button';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface RandomUser {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}

@Injectable({ providedIn: 'root' })
export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me/';

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>
  ): Observable<{ results: RandomUser[] }> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`);
    filters.forEach(filter => {
      filter.value.forEach(value => {
        params = params.append(filter.key, value);
      });
    });
    return this.http
      .get<{ results: RandomUser[] }>(`${this.randomUserUrl}`, { params })
      .pipe(catchError(() => of({ results: [] })));
  }

  constructor(private http: HttpClient) {}
}

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  sizeBt: NzButtonSize = 'large';
  optionSearch: string = 'all'
  isVisible = false;
  isConfirmLoading = false;

  listOfRandomUser: RandomUser[] = [];
  pageSize = 200;
  loading = true;
  pageIndex = 1;


  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.randomUserService.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(data => {
      this.loading = false
      this.listOfRandomUser = data.results;

    });
  }


  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }


  openModalView(): void{
    this.isVisible = true;
  }


  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {

  }

}
