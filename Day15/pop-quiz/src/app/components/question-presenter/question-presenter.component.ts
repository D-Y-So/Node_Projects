import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QUESTIONS } from 'src/app/model/questions';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  @Input()
  question: Question = QUESTIONS[0]; ;
  
  @Output()
  userChosenAnswer = new EventEmitter<string>();

  selectAnswer(answer: string){
    this.userChosenAnswer.emit(answer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
