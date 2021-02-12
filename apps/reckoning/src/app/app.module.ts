import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { ComponentsModule } from '@artesgo/components';
import { LayoutsModule } from '@artesgo/layouts';
import { StateMachineModule } from '@artesgo/state-machine';
import { GroceryModule } from '@artesgo/grocery';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { KarlaComponent } from './pages/karla/karla.component';
import { HomeComponent } from './pages/home/home.component';
import { I404Component } from './pages/i404/i404.component';
import { ListComponent } from './pages/list/list.component';

const ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'karla', component: KarlaComponent },
  { path: '**', component: I404Component },
]

@NgModule({
  declarations: [AppComponent, KarlaComponent, HomeComponent, I404Component, ListComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    LayoutsModule,
    GroceryModule,
    RouterModule.forRoot(ROUTES),
    StateMachineModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    GroceryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
