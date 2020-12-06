import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarModule } from '../shared/component/star/star.module';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './couser-info.component';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        
    ], 
    imports: [
        CommonModule,
        FormsModule,
        AppPipeModule,
        StarModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule { 

}