import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Rgb } from './models/types';
import { GameService } from './services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  userColor$: Observable<string> | null = null;
  computerColor$: Observable<string> | null = null;
  success$: Observable<boolean> | null = null;

  gameStart: boolean = false;

  constructor(private gameService: GameService) {}

  private rgbToString(rgb: Rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`; //`...` string css
  }
  
  ngOnInit(): void{
    this.computerColor$ = this.gameService.getComputerColor()
                              .pipe(map(rgb => this.rgbToString(rgb)));
    
    this.userColor$ = combineLatest([this.gameService.getRed(), 
                                    this.gameService.getGreen(), 
                                    this.gameService.getBlue()])
                                    .pipe(map(rgb => this.rgbToString(rgb)));
    
    this.success$ = combineLatest([this.computerColor$, this.userColor$])
                                  .pipe(map(rgbTuple => rgbTuple[0] === rgbTuple[1]));

  }

  randomize(): void {
    this.gameService.randomizeComputerColor();
    this.gameStart = true;
  }
  
}
