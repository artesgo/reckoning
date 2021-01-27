import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@artesgo/components';
import { LayoutsModule } from '@artesgo/layouts';
import { StateMachineModule } from '@artesgo/state-machine';
import { GroceryModule } from '@artesgo/grocery';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { KarlaComponent } from './pages/karla/karla.component';
import { HomeComponent } from './pages/home/home.component';
import { I404Component } from './pages/i404/i404.component';

const ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'karla', component: KarlaComponent },
  { path: '**', component: I404Component },
]

@NgModule({
  declarations: [AppComponent, KarlaComponent, HomeComponent, I404Component],
  imports: [
    BrowserModule,
    ComponentsModule,
    LayoutsModule,
    GroceryModule,
    RouterModule.forRoot(ROUTES),
    StateMachineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
