import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators,NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formulario!: FormGroup;
  submitted=false;

  constructor(
    private formb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario=this.formb.group({
      nombre:['',[Validators.required,Validators.minLength(20)]],
      apellido:['',Validators.minLength(4)],
      edad:[],
      email:['',Validators.required,Validators.email],
      contraseña:['',Validators.required,Validators.minLength(8)]
    });
  }

  get f() { return this.formulario.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.formulario.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formulario.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.formulario.reset();
    }
}
