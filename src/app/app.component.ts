import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { MainPageComponent } from './dbz/pages/main-page.component';
import { DbzModule } from './dbz/dbz.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeroComponent, ListComponent, DbzModule]
})
export class AppComponent {

  public title: string = 'Mi Primera App en Angular';
  public counter: number = 10;


  public increaseBy(){
    this.counter= this.counter+1;
  }

  public decreseBy(){
    this.counter= this.counter-1;
  }

  public resetCounter(){
    this.counter= 10;
  }




}




