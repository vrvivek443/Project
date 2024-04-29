import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent {
  skill:any
  experience:any
  skills:any[]=["Java","Hibernate","AWS","Springboot","Angular","Scala","XML","Windows","Ubuntu","Subversion","Mean","JavaScript"]
 rating:any[]=["Select","1 ", "2","3","4","5"]
 isTrue=false
 addSkill(){
  this.isTrue=!this.isTrue
 }
 addData(){
  this.skills.push(this.skill);
  console.log(this.skills,"hfbverbf")
 }
}
