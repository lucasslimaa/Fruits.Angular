import { HttpClient } from "@angular/common/http"

export class BaseService {
    readonly BASE_URL = 'http://127.0.0.1:8000/api/';

    constructor(public http: HttpClient) { }

    get(url: string, options?: any) {
        return this.http.get(this.BASE_URL + url, options);
    }

    post(url: string, body: any, options?: any) {
        return this.http.post(this.BASE_URL + url, body, options);
    }

    put(url: string, body: any, options?: any) {
        return this.http.put(this.BASE_URL + url, body, options);
    }

    delete(url: string, options: any) {
        return this.http.delete(this.BASE_URL + url, options);
    }
}