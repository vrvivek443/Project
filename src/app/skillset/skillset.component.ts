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
  skillForm: any;
 addSkill(){
  this.isTrue=!this.isTrue
 }
 addData(){
  if (this.skillForm.valid) {
    this.skills.push({ skill: this.skill, experience: this.experience, rating: '' });
    this.skillForm.reset();
    this.isTrue = false;
  } else {
    this.skillForm.markAllAsTouched();
  }
 }
}
