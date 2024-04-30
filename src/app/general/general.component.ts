import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  basicInfoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      position: ['', Validators.required],
      employeeReference: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      homePhoneNumber: [''],
      officeNumber: [''],
      personalEmail: ['', [Validators.required, Validators.email]],
      presentAddress: ['', Validators.required],
      locality: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      landmark: [''],
      hasPassport: ['', Validators.required],
      hasVisa: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      familyMembers: this.fb.array([this.createFamilyMember()]),
      languageProficiency: this.fb.array([this.createLanguage()])
    });
  }

  get familyMembers(): FormArray {
    return this.basicInfoForm.get('familyMembers') as FormArray;
  }

  get languageProficiency(): FormArray {
    return this.basicInfoForm.get('languageProficiency') as FormArray;
  }

  createFamilyMember(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      relationship: ['', Validators.required],
      age: ['', Validators.required],
      occupation: ['', Validators.required]
    });
  }

  createLanguage(): FormGroup {
    return this.fb.group({
      language: ['', Validators.required],
      canSpeak: [false],
      canRead: [false],
      canWrite: [false]
    });
  }

  addFamilyMember(): void {
    this.familyMembers.push(this.createFamilyMember());
  }

  removeFamilyMember(index: number): void {
    this.familyMembers.removeAt(index);
  }

  addLanguage(): void {
    this.languageProficiency.push(this.createLanguage());
  }

  removeLanguage(index: number): void {
    this.languageProficiency.removeAt(index);
  }

  onSubmit() {
    if (this.basicInfoForm.valid) {
      // Your form submission logic here
      console.log(this.basicInfoForm.value);
    } else {
      // Handle invalid form
    }
  }
  

}
