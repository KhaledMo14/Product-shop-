import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerNow:FormGroup = this.fb.group({
  Name : ["" ,[ Validators.required]] ,
  email : ["",[Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  userName:["",[Validators.required, Validators.pattern(/^[^\s]+$/)]],
  password:["",[Validators.required,Validators.minLength(8) , Validators.pattern(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/)]],
  confirmPassword: ["",[Validators.required]],
  adress: this.fb.array([]) ,

})



  constructor(private fb:FormBuilder , private _router:Router) { }

  get adress():FormArray 
  {
    return this.registerNow.get("adress")as FormArray
  }

  get registerValidation() {
  return this.registerNow.controls
  }
  ngOnInit(): void {
  }

  submitRegister()
  {
    this._router.navigate(['/auth/login'])

  }


 
newAdress(): FormGroup {
   return this.fb.group({
     Adress: ["",[Validators.required,Validators.pattern(/[a-zA-Z0-9]/)]],
     street: ["",[Validators.required,Validators.pattern(/[a-zA-Z0-9]/)]],
     country:["",[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
     city:["",[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
   })

}

addAdress() {
  this.adress.push(this.newAdress());
}

removeAdress(i:number) {
  this.adress.removeAt(i);
}
 
onSubmit() {
  console.log(this.registerNow.value);
}
 
}
