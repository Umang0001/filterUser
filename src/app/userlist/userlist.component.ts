import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = [
    { name: 'Umang',age: 21,skill: 'Javascript',exp: '1'},
    { name: 'Sam', age: 43, skill: 'Python', exp: '2'},
    { name: 'Raju', age: 87, skill: 'C++', exp: '12'},
    { name: 'Peter', age: 30, skill: 'Java', exp: '4'},
    { name: 'Fravash', age: 6, skill: 'C--', exp: '18'},
    { name: 'Bhagyashree', age: 9, skill: 'Ruby', exp: '10'},
    { name: 'Yadnesh', age: 17, skill: 'Laravel', exp: '7'},
    { name: 'Amina', age: 23, skill: 'Django', exp: '6'},
    { name: 'Mayur', age: 55, skill: 'R', exp: '1'},
    { name: 'Rutuja', age: 19, skill: 'DotNet', exp: '13'},
    { name: 'Yograj', age: 69, skill: 'Html', exp: '8'},
  ];
  filteredArray = this.users;

  filterName(name: string) {
    this.filteredArray = this.users.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  filterAge(name: string) {
    let val = +name;

    this.filteredArray = this.users.filter((e) =>
      e.age.toString().includes(name)
    );
  }
  filterSkill(name: string) {
    this.filteredArray = this.users.filter((e) =>
      e.skill.toLowerCase().includes(name.toLowerCase())
    );
  }
  sign = '';
  age = '';
  filterExp(name: string) {
    this.sign = name.slice(0, 1);
    this.age = name.slice(1);
    if (name.length!==1) {
      
      if (this.sign === '+') {
        this.filteredArray = this.users.filter((e) => +e.exp >= +this.age);
      } else if (this.sign === '-') {
        this.filteredArray = this.users.filter((e) => +e.exp <= +this.age);
      } else {
        this.filteredArray = this.users;
      }
    }
  }
 

  userData: any = {};

  handleSubmit(data: any) {
    this.userData = data;
  }

  handleDelete(name: string) {
    this.filteredArray = this.filteredArray.filter((e) => e.name !== name);
  }

  cuser: any // {name:"",age:0,skill:"",exp:0}
  index:number=0

  editable=false

  editUserName:string=""


  handleEdit(user: any) {
    
    this.editable= true
    this.editUserName=user.name;
    console.log(user);
    this.cuser=user
    
    
 


  }

  showSuccess=false;


  handleSave(name:string,newName:string,newAge:string,newSkill:string,newExp:string) {
    this.showSuccess=true
    this.editable= false

    let updatedDetails :any={
      name:newName,
      age: +newAge,
      skill:newSkill,
      exp: +newExp
    }


    console.log(name);
    this.filteredArray.forEach((e,i)=>{
            if (e.name===name) {
              this.filteredArray[i]=updatedDetails;
            }
          })
          console.log(this.filteredArray);
          
          this.users.forEach((e,i)=>{
            if (e.name===name) {
              this.filteredArray[i]=updatedDetails;
            }
          })
          console.log(this.users);

          setTimeout(() => {
            this.showSuccess=false
          }, 2000);


  }


}
