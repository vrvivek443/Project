import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      duration: this.fb.group({
        from: ['', Validators.required],
        to: ['', Validators.required]
      }),
      roleTitle: ['', Validators.required],
      reasonForChange: ['', Validators.required],
      totalExperience: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Form is valid, handle form submission
      console.log(this.form.value);
    } else {
      // Form is invalid, display error messages
      this.markFormGroupTouched(this.form);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
