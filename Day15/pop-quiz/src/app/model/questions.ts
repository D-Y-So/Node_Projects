import { Question } from './question';

export const QUESTIONS: Question[] = [
    {
        caption: 'How many paws does a cat have?',
        answers: ['4 paws','2 paws','6 paws','10 paws'],
        correctAnswer: 0,
        userAnswer: -1
    },

    {
        caption: 'What is an invalid Maine Coon coat color?',
        answers: ['White','Black','Calico','Color-point'],
        correctAnswer: 3,
        userAnswer: -1
    },

    {
        caption: 'In what country was the Raggdoll first bred?',
        answers: ['Russia','USA','UK','Turkey'],
        correctAnswer: 1,
        userAnswer: -1
    },

    {
        caption: 'Which of these is not a cat breed?',
        answers: ['Bombay','Savannah','Newfoundland','American curl'],
        correctAnswer: 2,
        userAnswer: -1
    }

]