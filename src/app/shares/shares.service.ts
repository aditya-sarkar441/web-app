/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/**
 * Shares Service.
 */
@Injectable({
  providedIn: 'root'
})
export class SharesService {

  constructor(private http: HttpClient) {}

  /**
   * @param accountId Shares Account Id of account to get data for.
   * @returns {Observable<any>} Shares data.
   */
  getSharesAccountData(accountId: string, template: boolean): Observable<any> {
    const httpParams = new HttpParams().set('template', template.toString());
    return this.http.get(`/accounts/share/${accountId}`, { params: httpParams });
  }

  /**
   * @param clientId Client Id assosciated with shares account.
   * @returns {Observable<any>} Shares account template.
   */
  getSharesAccountTemplate(clientId: string, productId?: string): Observable<any> {
    let httpParams = new HttpParams().set('clientId', clientId);
    httpParams = productId ? httpParams.set('productId', productId) : httpParams;
    return this.http.get('/accounts/share/template', { params: httpParams });
  }

  /**
   * @param {any} sharesAccount Shares Account
   * @returns {Observable<any>}
   */
  createSharesAccount(sharesAccount: any): Observable<any> {
    return this.http.post('/accounts/share', sharesAccount);
  }

  /**
   * @param {any} sharesAccount Shares Account
   * @returns {Observable<any>}
   */
  updateSharesAccount(accountId: string, sharesAccount: any): Observable<any> {
    return this.http.put(`/accounts/share/${accountId}`, sharesAccount);
  }

}
