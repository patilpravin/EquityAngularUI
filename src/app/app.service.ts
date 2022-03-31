import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EquityPositions } from './EquityPositions.model';

@Injectable()
export class AppService {
    apiURL = 'https://localhost:49153/api/equity/positions';
    executeTradeURL = 'https://localhost:49153/api/equity/executetrade';

    constructor(private http: HttpClient) { }

    getEquityPositions(): Observable<EquityPositions[]> {
        return this.http.get<EquityPositions[]>(this.apiURL);
    }

    executeTrade() {
        return this.http.post(this.executeTradeURL, null);
    }
}