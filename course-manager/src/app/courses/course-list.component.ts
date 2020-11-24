import {Component, OnInit} from '@angular/core'
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];
    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration : 120,
                rating: 5.4,
                releaseDate: '24/11/2020'
            },
            {
                id: 1,
                name: 'React: Forms',
                imageUrl: '',
                price: 109.99,
                code: 'RPS-8492',
                duration : 100,
                rating: 7.4,
                releaseDate: '25/11/2020'
            }
            
        ]
    }
}