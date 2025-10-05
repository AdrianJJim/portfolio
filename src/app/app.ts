import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Card } from './shared/card/card';
import { LongCard } from './shared/long-card/long-card';
import { SkillsCard } from './skills-card/skills-card';
import { AboutMe } from './shared/about-me/about-me';
import { Cta } from './shared/cta/cta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Card, LongCard, SkillsCard, AboutMe, Cta],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  showScrollTopButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopButton = window.pageYOffset > 200; // aparece al scrollear 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
