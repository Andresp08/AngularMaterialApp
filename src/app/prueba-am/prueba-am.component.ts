import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AnonymousSubject } from 'rxjs/internal/Subject';

class Persona {
  name: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  cellphone: number | undefined;
  address: string | undefined;
  fruitList: any[] | undefined;
  price: number | undefined;
}

@Component({
  selector: 'app-prueba-am',
  templateUrl: './prueba-am.component.html',
  styleUrls: ['./prueba-am.component.css']
})

export class PruebaAMComponent implements OnInit {
  showAddress = false;
  form!: FormGroup;
  dto: Persona = new Persona();
  elements: any[] = [{ name: 'Anon', price: 2000 }, { name: 'Banano', price: 2500 }, { name: 'Curuba', price: 3000 }]
  constructor(private fb: FormBuilder,

    public dialogRef: MatDialogRef<PruebaAMComponent>) {
    this.dto.cellphone = 312312312;
    this.dto.name = 'keneth';
    this.dto.lastname = 'Benitez';
    this.dto.email = 'kenth.benitez@unisangil.edu.co';

    this.form = this.fb.group({
      name: [this.dto.name, [Validators.required]],
      lastName: [this.dto.lastname, [Validators.required]],
      email: [this.dto.email, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)]],
      cellphone: [this.dto.cellphone, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      address: [this.dto.address],
      fruitList: [this.dto.fruitList],
      price: [this.dto.price]
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.dto;
  }
  close() {
    this.dialogRef.close();
  }
//Prueba Juan David Dias Becerra
  logicCelular($event: any) {
    console.log();
  }
  logicAddress($event: any) {
    this.showAddress = $event.checked ? true : false
    if ($event.checked) {
      this.form.controls['address'].setValidators([Validators.required, Validators.maxLength(36)]);
    } else {
      this.form.controls['address'].setValidators([]);
      this.form.controls['address'].errors;
      this.form.controls['address'].reset();
    }
    this.form.controls['address'].updateValueAndValidity();
  }
  logicSelect($event: any) {
    const selected = this.form.controls['fruitList'].value;
    let price = 0;
    selected.forEach((e: any) => {
      price = (e.price + price);
    });
    this.dto.price = price;
  }
}
