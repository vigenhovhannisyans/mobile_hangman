import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StringToArrayPipe } from './pipes/stringToArrayPipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './components/options/options.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    HomeComponent,
    GameComponent,
    StringToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
