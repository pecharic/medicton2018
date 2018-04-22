
export class FetchProvider  {

    static BaseUrl = 'http://localhost:8088/medicton';
    // static BaseUrl = '.';
    private token: string;

    lastResponse: Response;


    requestGet<T>(url: string): Promise<T> {
        const headers = this.constructHeader();
        headers.set("Content-Type", "text/plain");
        return fetch(FetchProvider.BaseUrl + url, {
            mode: 'cors',
            headers: headers
        })
            .then(res => {
                this.lastResponse = res;
                return res.json();
            })
            .then(q => <T>q)
    }
    requestGetRaw(url: string): Promise<string> {
        const headers = this.constructHeader();
        headers.set("Content-Type", "text/plain");
        return fetch(FetchProvider.BaseUrl + url, {
            mode: 'cors',
            headers: headers
        })
            .then(res => {
                this.lastResponse = res;
                return res.text();
            })
    }

    requestPost<T>(url: string, data: FormData, header?: Headers): Promise<T> {
        return fetch(FetchProvider.BaseUrl + url,
            {
                method: 'POST',
                body: data,
                mode: 'cors',
                headers: this.constructHeader(header)
            })
            .then(res => {
                this.lastResponse = res;
                return res.json();
            })
            .then(q => <T>q)
    }

    requestPostRaw(url: string, data: FormData, header?: Headers): Promise<string> {
        return fetch(FetchProvider.BaseUrl + url,
            {
                method: 'POST',
                body: data,
                mode: 'cors',
                headers: this.constructHeader(header)
            })
            .then(res => {
                this.lastResponse = res;
                return res.text();
            })
    }
    requestPut<T>(url: string, data: URLSearchParams, headers?: Headers): Promise<T> {
        return fetch(FetchProvider.BaseUrl + url,
            {
                method: 'Put',
                body: data,
                mode: 'cors',
                headers: this.constructHeader(headers)
            })
            .then(res => {
                this.lastResponse = res;
                return res.json();
            })
            .then(q => <T>q)
    }
    requestPutRaw(url: string, data: URLSearchParams, headers?: Headers): Promise<string> {
        return fetch(FetchProvider.BaseUrl + url,
            {
                method: 'Put',
                body: data,
                mode: 'cors',
                headers: this.constructHeader(headers)
            })
            .then(res => {
                this.lastResponse = res;
                return res.text();
            })
    }
    setToken(token: string): void {
        this.token = token;
    }
    getToken(): string { return this.token; }

    constructHeader(headers: Headers = new Headers()) {
        if (this.token && this.token.length > 0)
            headers.set('Authorization', this.token);
        return headers;
    }
}