import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Work } from '../models/work';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorkService {

    private baseApiUrl: string = environment.baseApiUrl;
    
    constructor(private httpClient: HttpClient) {}

    /**
     * Fetch all works of arts
     * @return {Observable<Work[]>}
     */
    getAllWorks(): Observable<Work[]>
    {
        const observable = new Observable<Array<any>>(observer => {
            Storage.get({
                key: 'works',
            }).then(cached => {
                if(cached.value){
                    observer.next(JSON.parse(cached.value));
                }else{
                    this.httpClient.get<Array<Work>>(this.baseApiUrl + '/works/').subscribe(data => {
                        observer.next(data);
                        Storage.set({
                            key: 'works',
                            value: JSON.stringify(data),
                        });
                    });
                }
            });
        });

        return observable;
    }

    /**
     * Fetch one work by his id
     * @param id
     * @return {Observable<Work>}
     */
    getWorkById(id: number): Observable<Work>
    {
        return this.httpClient.get<Work>(this.baseApiUrl + '/works/' + id);
    }

    /**
     * Add new work
     * @param work 
     * @returns 
     */
    addWork(work: Work): Observable<Object>
    {
        return this.httpClient.post(this.baseApiUrl + '/works', work);
    }
}
