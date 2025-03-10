import { HttpClient, HttpParams } from '@angular/common/http';
 import { inject, Injectable } from '@angular/core';
 import { Pagination } from '../../shared/models/pagination';
 import { Product } from '../../shared/models/product';
 import { ShopParams } from '../../shared/models/shopParams';
 
 @Injectable({
   providedIn: 'root'
 })
 export class ShopService {
   baseUrl = 'http://localhost:5001/api/'
   private http = inject(HttpClient);
   publisher: string[] = [];
   genre: string[] = [];
 
   getProducts(shopParams: ShopParams) {
     let params = new HttpParams();
 
     if (shopParams.genre.length > 0) {
       params = params.append('genre', shopParams.genre.join(','));
     }
 
     if (shopParams.publisher.length > 0) {
       params = params.append('publisher', shopParams.publisher.join(','));
     }
 
     if (shopParams.sort) {
       params = params.append('sort', shopParams.sort);
     }
 
     if (shopParams.search) {
       params = params.append('search', shopParams.search);
     }
 
     params = params.append('pageSize', shopParams.pageSize);
     params = params.append('pageIndex', shopParams.pageNumber);
 
     return this.http.get<Pagination<Product>>(this.baseUrl + 'products', {params});
   }
 
   getGenre() {
     if (this.genre.length > 0) return;
     return this.http.get<string[]>(this.baseUrl + 'products/genre').subscribe({
       next: response => this.genre = response,
     })
   }
 
   getPublisher() {
     if (this.publisher.length > 0) return;
     return this.http.get<string[]>(this.baseUrl + 'products/publisher').subscribe({
       next: response => this.publisher = response,
     })
   }
 }