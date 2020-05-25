import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  @Input  ('title')  titulo = 'JavierGG';
  @Input  ('subtitle')  subtitulo = 'Javis';
  @Input  ('subtitleBold')  subtituloBold = 'Poreso';
  @Input  ('messageButton')  mensajeBoton = 'Uno';
  @Input  ('italic')  italic = 'fecha';
  @Input  ('numeroBolita')  numeroBolita = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
