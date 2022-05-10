import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  //properties
  serverID: number=10;
  serverStatus: string='OnLine';
  mainServer: boolean=true;
 
  name:string= 'Milindh Kashyap';
  age:number= 21;
  salary:number= 5000;
  firstName:string='Milindh'
  lastName:string='Kashyap'
  imagePath:string="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201307/wipro_660_071913035442.jpg";

  constructor() { }

  ngOnInit(): void 
  {
    
  }

  //methods
  getFullName():string
  {
    return this.firstName+' '+this.lastName;
  }

    convertToDate()
    {
      const date = new Date();
      return date.toLocaleDateString();
    }

}
function convertToDate() {
  throw new Error('Function not implemented.');
}

