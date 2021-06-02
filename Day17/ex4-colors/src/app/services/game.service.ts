import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rgb } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  //data
  private red: number = 0;
  private green: number = 0;
  private blue: number = 0;
  private computerColor: Rgb = [0,0,0];

  private red$ = new BehaviorSubject(this.red);
  private green$ = new BehaviorSubject(this.green);
  private blue$ = new BehaviorSubject(this.blue);
  private computerColor$: BehaviorSubject<Rgb> = new BehaviorSubject(this.computerColor);

  //methods
  private randomRgbValue(): number{
    return Math.floor((Math.random() * 256));
  }

  randomizeComputerColor(): void {
    this.computerColor = [this.randomRgbValue(),this.randomRgbValue(),this.randomRgbValue()];
    this.computerColor$.next(this.computerColor);
  }
  
  getRed(): Observable<number> {
    return this.red$.asObservable();
  }

  getGreen(): Observable<number> {
    return this.green$.asObservable();
  }

  getBlue(): Observable<number> {
    return this.blue$.asObservable();
  }

  getComputerColor(): Observable<Rgb> {
    return this.computerColor$.asObservable();
  }

  setRed(value: number): void{
    this.red = value;
    this.red$.next(this.red);
  }

  setGreen(value: number): void{
    this.green = value;
    this.green$.next(this.green);
  }

  setBlue(value: number): void{
    this.blue = value;
    this.blue$.next(this.blue);
  }

  constructor() { }
  
}
