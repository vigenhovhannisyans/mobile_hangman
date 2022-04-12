import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StringToArrayPipe } from './pipes/stringToArrayPipe';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OptionsComponent } from './components/options/options.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionModalComponent } from './components/modal/action-modal/action-modal.component';
import { ActionComponent } from './includes/action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    HomeComponent,
    GameComponent,
    StringToArrayPipe,
    ActionModalComponent,
    ActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
