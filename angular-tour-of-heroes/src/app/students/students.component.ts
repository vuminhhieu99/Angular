import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  color:string = "red";
  name:string = "VŨ Minh Hiếu";
  isBackground:boolean = false;
  avatar = "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/133721842_2803584809888152_949590738399779237_n.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=9DR_sKnxYw0AX-qoaRn&_nc_ht=scontent.fhan2-4.fna&oh=fe6c3352bf5c78633814091d0b12e102&oe=60694B38";
  constructor() { }

  clickImg($event:any){
    console.log($event.offsetX+"-");
  }

  

  ngOnInit(): void {
  }

}
