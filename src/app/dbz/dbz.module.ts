import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from "./components/list/list.dbzcomponent";
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { Character } from './interfaces/character.interface';




@NgModule({
    declarations: [MainPageComponent],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        ListDBZComponent,
        AddCharacterComponent,
        FormsModule



    ]
})
export class DbzModule { }
