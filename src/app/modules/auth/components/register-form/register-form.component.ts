import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {

    this.registerForm = new FormGroup({

        email: new FormControl('', [ 
          Validators.required, 
          Validators.email
        ]),

        name: new FormControl('', [
          Validators.required, 
          Validators.minLength(3)
        ]),

        lastName: new FormControl('', [
          Validators.required, 
          Validators.minLength(3)
        ]),

        phone: new FormControl('', [
          Validators.required, 
          Validators.minLength(3)
        ]),
        
        aboutMe: new FormControl('', [
          Validators.required, 
          Validators.minLength(3)
        ])
      }
    )

    this.registerForm.valueChanges.subscribe((res) => {
      console.log('👌👌👌', res)
    })
  
  }
}
