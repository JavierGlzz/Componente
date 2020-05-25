import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente0',
  templateUrl: './componente0.component.html',
  styleUrls: ['./componente0.component.css']
})
export class Componente0Component implements OnInit {

  
  
  public italic = "fecha";
  public title = "JavierGG";
  public subtitle = "Javis";
  public subtitleBold = "Poreso";
  public messageButton = "Uno";
  public numeroBolita = "2";

  constructor() { }

  ngOnInit(): void {
  }

}
