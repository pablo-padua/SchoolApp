import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FieldsetModule } from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClassroomFormComponent } from './add-classroom/add-classroom-form/add-classroom-form.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import { HttpClientModule } from '@angular/common/http';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { SchoolFormComponent } from './add-school/school-form/school-form.component';
import { DisplayClassroomComponent } from './display-classroom/display-classroom.component';
import { EditClassroomComponent } from './edit-classroom/edit-classroom.component';
import { DisplaySchoolComponent } from './display-school/display-school.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AddClassroomComponent,
    AddClassroomFormComponent,
    HeaderComponent,
    FooterComponent,
    AddSchoolComponent,
    SchoolFormComponent,
    DisplayClassroomComponent,
    EditClassroomComponent,
    DisplaySchoolComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FieldsetModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    KeyFilterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
