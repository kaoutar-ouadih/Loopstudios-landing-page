import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuClicked: boolean = false;

  onMenuClick(){
    this.isMenuClicked = true;
  }
  onCloseBtnClick(){
    this.isMenuClicked = false;
  }

}
