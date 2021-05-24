import { Exam } from "./exam";

let exam = new Exam();

exam.addQuestion({
    caption: 'How many paws does a cat have?',
    answers: [
        '4 paws',
        '2 paws',
        '6 paws',
        '10 paws'
    ],
    correctIndex: 0 //zero based
});

exam.addQuestion({
    caption: 'What is an invalid Maine Coon coat color?',
    answers: [
        'White',
        'Black',
        'Calico',
        'Color-point'
    ],
    correctIndex: 3
});

exam.addQuestion({
    caption: 'In what country was the Raggdoll first bred?',
    answers: [
        'Russia',
        'USA',
        'UK',
        'Turkey'
    ],
    correctIndex: 1 
});

exam.addQuestion({
    caption: 'Which of these is not a cat breed?',
    answers: [
        'Bombay',
        'Savannah',
        'Newfoundland',
        'American curl'
    ],
    correctIndex: 2
});


exam.print();

let solution1 = [3,2,1,0]; //25% correct
let solution2 = [1,1,3,0]; //0% correct
let solution3 = [0,3,1,2,3,1,0]; //100% correct

console.log('Solution 1:' + ' ' + solution1);
console.log('Grade:' + ' ' + exam.grade(solution1) + '\n');

console.log('Solution 2:' + ' ' + solution2);
console.log('Grade:' + ' ' + exam.grade(solution2) + '\n');

console.log('Solution 3:' + ' ' + solution3);
console.log('Grade:' + ' ' + exam.grade(solution3) + '\n');