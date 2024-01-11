import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='Ironman';
  public age:number=45;

  get capitalizedName():string{
    return this.name;
  }

  getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }

  changeName(){
    return this.name='Spiderman';
  }

  changeAge(){
    return this.age=20;
  }

  resetName(){
    return this.name='Ironman';

  }

  resetAge(){
    return this.age=45;
  }






}
