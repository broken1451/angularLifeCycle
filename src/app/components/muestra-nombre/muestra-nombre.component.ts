import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styleUrls: ['./muestra-nombre.component.scss']
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ====> ', {changes})
  }

  ngOnInit(): void {
  }

}
