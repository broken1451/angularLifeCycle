import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss'],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  public nombre: string = 'Adrian';
  public segundos: number = 0;
  public timerSub$!: Subscription;

  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Method ngDoCheck.');
  }
  ngAfterContentInit(): void {
    console.log('Method ngAfterContentInit.');
  }
  ngAfterContentChecked(): void {
    console.log('Method ngAfterContentChecked.');
  }
  ngAfterViewInit(): void {
    console.log('Method ngAfterViewInit.');
  }
  ngAfterViewChecked(): void {
    console.log('Method ngAfterViewChecked.');
  }
  ngOnDestroy(): void {
    console.log('Method ngOnDestroy.');
    this.timerSub$.unsubscribe();
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.timerSub$ = interval(1000).subscribe((num) => {
      this.segundos = num;
    });
  }

  guardar() {}
}
