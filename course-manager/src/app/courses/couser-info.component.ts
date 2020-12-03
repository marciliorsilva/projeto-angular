import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './couser-info.component.html'
})
export class CourseInfoComponente implements OnInit{
    
    course ?: Course;
    idTemp: string = '';


    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}
    
    ngOnInit(): void {
        this.idTemp = String(this.activatedRoute.snapshot.paramMap.get('id')); 
        this.course = this.courseService.retrieveById(parseInt(this.idTemp));

    }

    save():void {
        if(this.course !== undefined){
            this.courseService.save(this.course);
        }
        
    }
}