export interface Question { //For simple entity with no logic, use 'interface' insted of 'class'
    caption: string;
    answers: string[];
    correctIndex: number;
}