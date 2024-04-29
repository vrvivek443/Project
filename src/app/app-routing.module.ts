import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { GeneralComponent } from './general/general.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SkillsetComponent } from './skillset/skillset.component';

const routes: Routes = [
  
  { path: 'general', component: GeneralComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skillset', component: SkillsetComponent },
  { path: 'professional', component: ProfessionalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
