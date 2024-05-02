import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  isTrue: boolean = false;
  skill: string = '';
  experience: number = 0;
  skills: {
    rating: number; skill: string, experience: number 
}[] = [];
  rating: number[] = [1, 2, 3, 4, 5];
  skillForm!: FormGroup; 
  editMode: boolean = false;
  editIndex: number = -1;
  editSkillData: { skill: string, experience: number, rating: number } = { skill: '', experience: 0, rating: 0 };


  constructor() { }

  ngOnInit(): void {
    this.skillForm = new FormGroup({
      skill: new FormControl('', Validators.required),
      experience: new FormControl(null, Validators.required)
    });
  }

  addSkill() {
    this.isTrue = !this.isTrue;
  }

 
    addData() {
      if (this.skillForm.valid) {
        const newSkill = {
          skill: this.skillForm.value.skill,
          experience: this.skillForm.value.experience,
          rating: 0 
        };
        this.skills.push(newSkill);
        this.skillForm.reset(); 
        this.isTrue = false;
      }
    }
  

  editSkill(index: number) {
    this.editMode = true;
    this.editIndex = index;
    
    this.editSkillData = { ...this.skills[index], rating: this.skills[index]?.rating || 0 }; 
  }

  saveSkill(index: number) {
    if (this.editSkillData.skill && this.editSkillData.experience !== null) {
      this.skills[index] = { ...this.editSkillData };
      this.editMode = false;
      this.editIndex = -1;
      this.editSkillData = { skill: '', experience: 0, rating: 0 };
    }
  }

  deleteSkill(index: number) {
    this.skills.splice(index, 1);
  }
}
