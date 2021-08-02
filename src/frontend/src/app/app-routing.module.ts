import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { DisplayClassroomComponent } from './display-classroom/display-classroom.component';
import { EditClassroomComponent } from './edit-classroom/edit-classroom.component';
import { DisplaySchoolComponent } from './display-school/display-school.component';

const routes: Routes = [

	{ path: 'inicio', component: AppComponent },
	{ path: 'display-classroom', component: DisplayClassroomComponent },
	{ path: 'add-classroom', component: AddClassroomComponent },
	{ path: 'edit-classroom', component: EditClassroomComponent },
	{ path: 'add-school', component: AddSchoolComponent },
	{ path: 'display-school', component: DisplaySchoolComponent },
	{ path: '', redirectTo: 'add-classroom', pathMatch: 'full' },

	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
