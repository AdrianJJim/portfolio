import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgFor, NgStyle],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class Card implements AfterViewInit {
  @ViewChildren('card') cardElements!: QueryList<ElementRef>;

  truncateText = (text: string, maxLength = 100): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  cards = [
    {
      imgUrl: 'assets/images/biketrack.png',
      title: 'BikeTrack - Dealership',
      github: 'https://github.com/AdrianJJim/BikeTrack',
      description: 'BikeTrack is a management application for dealerships specialising in the sale of motorcycles.',
      skills: [
        { name: 'Spring Boot', img: 'assets/icons/simple-icons--springboot.png' },
        { name: 'TailwindCSS', img: 'assets/icons/devicon--tailwindcss.png' },
        { name: 'JavaScript', img: 'assets/icons/skill-icons--javascript.png' },
        { name: 'SQL', img: 'assets/icons/vscode-icons--file-type-sql.png' },
        { name: 'PL/SQL', img: 'assets/icons/vscode-icons--file-type-plsql.png' },
        { name: 'ORMs', img: 'assets/icons/catppuccin--folder-drizzle-orm.png' }
      ]
    },
    {
      imgUrl: 'assets/images/myinvestors.jpg',
      title: 'My Investors',
      github: 'https://github.com/AdrianJJim/my_investors',
      description: 'CRUD Application in Laravel for Financial Investments, with a focus on User Experience (UX).',
      skills: [
        { name: 'Laravel', img: 'assets/icons/logos--laravel.png' },
        { name: 'PHP', img: 'assets/icons/material-icon-theme--php-elephant-pink.png' },
        { name: 'JavaScript', img: 'assets/icons/skill-icons--javascript.png' },
        { name: 'SQL', img: 'assets/icons/vscode-icons--file-type-sql.png' },
        { name: 'LAMP', img: 'assets/icons/mage--stack-fill.png' },
        { name: 'Postman', img: 'assets/icons/devicon--postman.png' }
      ]
    },
    {
      imgUrl: 'assets/images/apiAggregator.png',
      title: 'API Aggregator',
      github: 'https://github.com/AdrianJJim/springboot-api-aggregator',
      description: 'Backend application that consumes multiple public APIs (about cities) and exposes a single clean API.',
      skills: [
        { name: 'Spring Boot', img: 'assets/icons/simple-icons--springboot.png' },
        { name: 'Java', img: 'assets/icons/devicon--java.png' },
        { name: 'Postman', img: 'assets/icons/devicon--postman.png' },
      ]
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.cardElements.forEach(el => observer.observe(el.nativeElement));
  }
}
