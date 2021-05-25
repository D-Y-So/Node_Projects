import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //data
  a: number = 0;
  b: number = 0;
  addResult: number | null = null;
  subResult: number | null = null;
  multResult: number | null = null;
  
  //methods
  private _reset(){
    this.addResult = null;
    this.subResult = null;
    this.multResult = null;
  }

  setA(value: string){ //input from UI is always string
    this.a = Number(value);
    this._reset();
  }

  setB(value: string){
    this.b = Number(value);
    this._reset();
  }

  get hasResults(): boolean {
    return (this.addResult !== null) &&
           (this.subResult !== null) &&
           (this.multResult !== null);
  }
  
  calc(){
    if ((this.a === null) || (this.b === null)){
      this._reset();

    } else{
      this.addResult = this.a + this.b;
      this.subResult = this.a - this.b;
      this.multResult = this.a * this.b;
    }    
  }

}
