import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Input() title!: string;
  @Input() description!: string;

isMenuOpen = false;
 toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }

}
