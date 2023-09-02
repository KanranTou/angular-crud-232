import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from './modelo/contacto';
import { ContactoService } from './servicios/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-crud-232';
  contactoArray: Contacto[] = [];
  contactoForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private contactoService: ContactoService) {
    this.contactoForm = formbuilder.group({
      fullname: [''],
      phone: [''],
      email: [''],
    })
  }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.contactoService.getContactos().subscribe(
      (result: any) => {
        this.contactoArray = result?.contactos;
        console.log(this.contactoArray);
      }, (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia...',
          text: 'Ha ocurrido un error al leer!',
        });
      }
    );
  }

  registrarContacto(): void {
    this.contactoService.registrarContacto(this.contactoForm.value).subscribe((result: any) => { }, (err: any) => {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Advertencia...',
        text: 'Ha ocurrido un error al registrar!',
      })
    })
  }
}