import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  showFiller=false;
  selectedOption : string='';
  toggleFiller(){
    this.showFiller = !this.showFiller;
  }
}
