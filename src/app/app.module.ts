import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared.module';
import { PlayersComponent } from './components/general/players/players.component';
import { PlayersGridComponent } from './components/general/players-grid/players-grid.component';
import { PlayersSearchComponent } from './components/general/players-search/players-search.component';
import { PlayersInterceptor } from './services/players.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayersGridComponent,
    PlayersSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PlayersInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
