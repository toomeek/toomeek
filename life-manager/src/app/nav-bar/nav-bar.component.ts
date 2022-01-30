import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  selectedVal = 'home'

  @Output()
  public valueSelected: EventEmitter<string> = new EventEmitter()

  @Input()
  public modulList:string[][] = []

  navChanged (selectedValue: string) {
    this.selectedVal = selectedValue
    this.valueSelected.emit(selectedValue)
  }
}
