import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CarComponent } from './car/car.component'
import { FinancesComponent } from './finances/finances.component'
import { FriendsComponent } from './friends/friends.component'
import { GardenComponent } from './garden/garden.component'
import { HomeComponent } from './home/home.component'
import { ShoppingComponent } from './shopping/shopping.component'
import { TravelsComponent } from './travels/travels.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'garden', component: GardenComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'travels', component: TravelsComponent },
  { path: 'car', component: CarComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'finances', component: FinancesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
