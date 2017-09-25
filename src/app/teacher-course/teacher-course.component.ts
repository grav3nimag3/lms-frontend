import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz.model';
import { TeacherQuizService } from '../teacher-quiz/teacher-quiz.service';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css'],
  providers: [TeacherQuizService]
})
export class TeacherCourseComponent implements OnInit {
  
  cId: number;
  quiz: Quiz = new Quiz();

  constructor(private _route:ActivatedRoute, private _teacherQuizService:TeacherQuizService, private _router:Router) { }

  ngOnInit() {
    this.cId = this._route.snapshot.params['id'];
    console.log(this.cId);
  }

  addNewQuiz () {
    this.quiz.course = this.cId;
    console.log('******'+JSON.stringify(this.quiz));
    this._teacherQuizService.addNewQuiz(this.quiz).subscribe(quiz => {
      console.log(quiz);
      this._router.navigateByUrl('courses/'+this.cId+'/quiz/'+quiz.quizId);
    });
  }

}
