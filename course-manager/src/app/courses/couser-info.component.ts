import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './couser-info.component.html'
})
export class CourseInfoComponente implements OnInit{
    
    courseId: number = 0;
    idTemp: string = '';

    constructor(private activatedRoute: ActivatedRoute){}
    
    ngOnInit(): void {
        this.idTemp = String(this.activatedRoute.snapshot.paramMap.get('id')); 
        this.courseId = parseInt(this.idTemp == null ? '0' : this.idTemp);
    }
}