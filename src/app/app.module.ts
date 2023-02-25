import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { CardComponent } from './components/card/card.component';
import { SkillProgresComponent } from './components/skill-progres/skill-progres.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { GridskllsComponent } from './components/gridsklls/gridsklls.component';
import { AboutmeComponent } from './sections/aboutme/aboutme/aboutme.component';
import { GridIconsLinksComponent } from './components/grid-icons-links/grid-icons-links.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationSectionComponent } from './sections/education-section/education-section.component';
import { ExperienceSectionComponent } from './sections/experience-section/experience-section.component';
import { SkillSectionComponent } from './sections/skill-section/skill-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { ModalEducationComponent } from './components/modal-education/modal-education.component';
import { ShowButtonComponent } from './components/show-button/show-button.component';
import { ModalExperienceComponent } from './components/modal-experience/modal-experience.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ModalSkillsComponent } from './components/modal-skills/modal-skills.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CardProjectComponent } from './components/card-project/card-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ModalFormComponent,
    CardComponent,
    SkillProgresComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    GridskllsComponent,
    AboutmeComponent,
    GridIconsLinksComponent,
    PortfolioComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    SkillSectionComponent,
    ProjectsSectionComponent,
    ModalEducationComponent,
    ShowButtonComponent,
    ModalExperienceComponent,
    ModalSkillsComponent,
    HomeComponent,
    LoginComponent,
    CardProjectComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
