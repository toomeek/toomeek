import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-manager'

  modules = [
    ['home', 'home'],
    ['garden', 'cloud'],
    ['friends', 'accessibility_new'],
    ['car', 'commute'],
    ['finances', 'credit_card'],
    ['travels', 'flight_takeoff'],
    ['shopping', 'add_shopping_cart']
  ]

  items: string[] = []

  printSelectedValue (selectedValue: string) {
    console.log('User chose the following module: ' + selectedValue)
  }
}
