import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validtionError:boolean= false
  constructor() { }

  ngOnInit(): void {
  }

  sendValue(data:any)
  {
    if(data.valid)
    {
      console.log(data)
    }
    else 
    {
      this.validtionError =true
    }
  }

}
