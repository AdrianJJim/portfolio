import { NgFor, NgStyle } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  imports: [NgFor, NgStyle],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.scss'
})
export class SkillsCard {
  
    @ViewChildren('card') cardElements!: QueryList<ElementRef>;
  @ViewChildren('skill') skillElements!: QueryList<ElementRef>;

  cards = [
    {
      title: 'Frameworks',
      skills: [
        { name: 'Spring Boot', img: 'assets/icons/simple-icons--springboot.png' },
        { name: 'Laravel', img: 'assets/icons/logos--laravel.png' },
        { name: 'Angular', img: 'assets/icons/devicon--angular.png' },
        { name: 'Bootstrap', img: 'assets/icons/devicon--bootstrap.png' },
        { name: 'Tailwind CSS', img: 'assets/icons/devicon--tailwindcss.png' }
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'Java', img: 'assets/icons/devicon--java.png' },
        { name: 'PHP', img: 'assets/icons/material-icon-theme--php-elephant-pink.png' },
        { name: 'JavaScript', img: 'assets/icons/skill-icons--javascript.png' },
        { name: 'TypeScript', img: 'assets/icons/skill-icons--typescript.png' },
        { name: 'HTML', img: 'assets/icons/skill-icons--html.png' },
        { name: 'CSS', img: 'assets/icons/skill-icons--css.png' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', img: 'assets/icons/logos--mysql.png' },
        { name: 'SQL', img: 'assets/icons/vscode-icons--file-type-sql.png' },
        { name: 'SQLite', img: 'assets/icons/skill-icons--sqlite.png' },
        { name: 'PL/SQL', img: 'assets/icons/vscode-icons--file-type-plsql.png' },
        { name: 'ORMs', img: 'assets/icons/catppuccin--folder-drizzle-orm.png' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', img: 'assets/icons/skill-icons--git.png' },
        { name: 'Docker', img: 'assets/icons/material-icon-theme--docker.png' },
        { name: 'Linux', img: 'assets/icons/flat-color-icons--linux.png' },
        { name: 'VSCode', img: 'assets/icons/material-icon-theme--vscode.png' },
        { name: 'NetBeans', img: 'assets/icons/devicon--netbeans.png' },
        { name: 'LAMP', img: 'assets/icons/mage--stack-fill.png' },
        { name: 'Postman', img: 'assets/icons/devicon--postman.png' }
      ]
    }
  ];

@ViewChild('revealElement') revealElement!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.revealElement.nativeElement.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.revealElement.nativeElement);
  }

}
