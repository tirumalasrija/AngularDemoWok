import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Technology } from 'src/app/customer';
import { Observable } from 'rxjs';

@Injectable()
export class TechnologyService {
    private readonly technologyEndpoint = `${environment.api}/api/technologies`;
    constructor(private http: HttpClient) { }

    getTechnologies(): Promise<Technology[]> {
        return this.http.get<any>(`${this.technologyEndpoint}`)
            .toPromise()
            .then(res => <Technology[]>res.technologies)
            .then(data => { return data; });
    }

    updateTechnology(id, name): Promise<Technology> {
        return this.http.put(`${this.technologyEndpoint}/${id}`, { name })
            .toPromise()
            .then((res: any) => <Technology>res.technology)
            .then(data => { return data; });
    }

    storeTechnology(name: string): Promise<Technology> {
        return this.http.post(this.technologyEndpoint, { name })
            .toPromise()
            .then((res: any) => <Technology>res.technology)
            .then(data => { return data; });
    }
}