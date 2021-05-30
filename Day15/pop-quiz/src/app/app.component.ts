import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //data
  currentQuestionIndex: number = 0;
  currentQuestion: Question= QUESTIONS[this.currentQuestionIndex]; 
  summary: Question[]=[];
  isQuizOver: boolean = false;

  //methods
  userSelectedAnswer(answer: string){
    if (!this.isQuizOver){
      let answerIndex = this.currentQuestion.answers.indexOf(answer);
      this.currentQuestion.userAnswer = answerIndex;
      this.summary.push(this.currentQuestion);
      this.currentQuestionIndex++;
      this.currentQuestion = QUESTIONS[this.currentQuestionIndex]
      this.isQuizOver = !(this.currentQuestion);
    }

  }
}
