import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import Swal from 'sweetalert2';

@Injectable()
export class AppGlobals {
  constructor() {

  }
  patternFormat = {
    nombre: '[A-Za-zñÑáéíóúÁÉÍÓÚñ ]+',
    email: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
    telefono: '[0-9]+',
    numeroDocumento: '[0-9]+',
    numero: '[0-9]+',
    nit: '[0-9]+',
    direccion: '[A-Za-z-0-9-.#-N°-ñÑáéíóúÁÉÍÓÚ ]+',
    placa: '[A-Z]{3}[0-9]{3}',
    placaTitle: 'Ejemplo: ABC123'
  };

  datePipe = new DatePipe('en-US');

  public isLoading = false;

  alertSuccess(value) {
    Swal.fire({
      type: 'success',
      title: value,
      showConfirmButton: false,
      timer: 2000
    });
  }

  alertError(value) {
    Swal.fire({
      type: 'error',
      title: value,
    });
  }

}
