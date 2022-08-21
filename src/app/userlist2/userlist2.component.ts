import { Component, OnInit ,Input} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-userlist2',
  templateUrl: './userlist2.component.html',
  styleUrls: ['./userlist2.component.css']
})
export class Userlist2Component implements OnInit {

  constructor() { 
  }
  @Input() item=true

  ngOnInit(): void {
  }

  handleLogin(data:any){
    console.log(data);
    alert("Login Successful")
    
  }

  myForm=new FormGroup({username:new FormControl(""),password: new FormControl("")})

  handleSubmit(){
    if (this.myForm.value.username && this.myForm.value.password) {
      
      console.log(this.myForm.value);
    }

    else{
      alert("Please enter all credentials")
      
    }
    
  }


}
