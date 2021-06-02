import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-rgb-editor',
  templateUrl: './rgb-editor.component.html',
  styleUrls: ['./rgb-editor.component.css']
})
export class RgbEditorComponent implements OnInit {

  constructor(private gameService: GameService) { }

  private normalizeColorValue(value: string): number {
    let num = Math.round(Number(value));
    return Math.min(Math.max(0,num), 255);
  }
  
  setRed(value: string){
    this.gameService.setRed(this.normalizeColorValue(value));
  }

  setGreen(value: string){
    this.gameService.setGreen(this.normalizeColorValue(value));
  }

  setBlue(value: string){
    this.gameService.setBlue(this.normalizeColorValue(value));
  }

  ngOnInit(): void {
  }

}
