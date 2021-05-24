import { Question } from "./question";

export class Exam{
    private questions: Question[] = [];

    addQuestion(question: Question): void{
        this.questions.push(question);
    }

    print(): void {
        for (const question of this.questions){
            console.log('(' + (this.questions.indexOf(question)+1) + ') ' + question.caption);
            for(const answer of question.answers) {
                console.log(question.answers.indexOf(answer) + ') ' + answer);
            }

            console.log('\n'+ '################################'+ '\n');            
        }
    }

    grade(answers: number[]): number {
        let correctCount = 0;

        for (let i = 0; i < answers.length; i++) {
            let question = this.questions[i];
            let answer = answers[i];

            if (typeof(question) !== 'undefined'){
                if (answer === question.correctIndex){
                    correctCount++;
                }
            }
        }

        return correctCount / this.questions.length * 100;
    }

}