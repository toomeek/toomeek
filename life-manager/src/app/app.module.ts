import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CarComponent } from './car/car.component'
import { FinancesComponent } from './finances/finances.component'
import { FriendsComponent } from './friends/friends.component'
import { GardenComponent } from './garden/garden.component'
import { HomeComponent } from './home/home.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { ShoppingComponent } from './shopping/shopping.component'
import { TravelsComponent } from './travels/travels.component'

@NgModule({
  declarations: [AppComponent,
    NavBarComponent,
    GardenComponent,
    HomeComponent,
    FriendsComponent,
    ShoppingComponent,
    TravelsComponent,
    CarComponent,
    FinancesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  ;
}
