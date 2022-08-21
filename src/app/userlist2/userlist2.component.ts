import { Component, OnInit ,Input} from '@angular/core';

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


}
