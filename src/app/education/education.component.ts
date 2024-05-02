import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationalForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.educationalForm = this.formBuilder.group({
      course: ['', Validators.required],
      collegeName: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      cgpa: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  onSubmit() {
    if (this.educationalForm.valid) {
      // Form is valid, handle submission
      console.log(this.educationalForm.value);
    } else {
      // Form is invalid, display validation errors
      alert('Please fill all required fields and provide valid data.');
    }
  }

}
