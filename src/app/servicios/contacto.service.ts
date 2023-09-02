import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../modelo/contacto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactoService{
    readonly BASE_URL: string='http://137.184.120.127:5000'
    constructor(private http: HttpClient){}

    getContactos(){
        return this.http.get<Contacto[]> (`${this.BASE_URL}/contactos`);
    }

    registrarContacto(form: any){
        return this.http.post(`${this.BASE_URL}/new`, form);
    }
}

