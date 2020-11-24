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
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration : 120,
                rating: 4.5,
                releaseDate: '24/11/2020'
            },
            {
                id: 1,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 109.99,
                code: 'RPS-8492',
                duration : 100,
                rating: 3.0,
                releaseDate: '25/11/2020'
            }
            
        ]
    }
}