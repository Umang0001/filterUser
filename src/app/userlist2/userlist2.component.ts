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
  
  isName=false;
  isPass=false
  passMsg="Enter Password"
  count=0
  
  handleSubmit(){
    this.count++;
    this.passMsg="Enter Password"
    this.isName=false
    this.isPass=false
    if (this.myForm.value.username && this.myForm.value.password) {
      if (this.myForm.value.password.length<7 &&this.myForm.value.password.length>0) {
        this.isPass=true;
        this.passMsg="Minimum 6 characters required"
      }
      
      console.log(this.myForm.value);
    }

    else{
      if (!this.myForm.value.username) {
        this.isName=true
      }
      if (!this.myForm.value.password) {
        this.isPass=true
      }
    }
    
  }




}
