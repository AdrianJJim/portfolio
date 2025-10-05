import { NgFor, NgStyle } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-long-card',
  imports: [NgFor, NgStyle],
  templateUrl: './long-card.html',
  styleUrl: './long-card.scss'
})
export class LongCard {

  @ViewChildren('card') cardElements!: QueryList<ElementRef>;


  cards = [
    {
      experience: [{
        sectionTitle: "Experience",
        title: "Full Stack Developer",
        company: "Sagatech Servicios Informáticos",
        description: `--Design and development of dynamic websites using Java, JavaScript, HTML5, CSS3, and frameworks such as Spring Boot, optimising user experience (UX) and performance across different devices. 

--Development and integration of custom WordPress plugins with PHP, aimed at enhancing functionality and adapting to specific requirements. 

--Implementation of a product recommendation system with automated messaging via the WhatsApp API. 

--Experience with MySQL databases, API consumption and integration, version control with Git/GitHub, and deployment. 

--Focus on best programming practices, scalability, and performance optimisation, applying agile methodologies such as Scrum.
`,
        skills: [
          { name: 'Java', img: 'assets/icons/devicon--java.png' },
          { name: 'Spring Boot', img: 'assets/icons/simple-icons--springboot.png' },
          { name: 'JavaScript', img: 'assets/icons/skill-icons--javascript.png' },
          { name: 'HTML', img: 'assets/icons/skill-icons--html.png' },
          { name: 'CSS', img: 'assets/icons/skill-icons--css.png' },
          { name: 'Git', img: 'assets/icons/skill-icons--git.png' },
          { name: 'PHP', img: 'assets/icons/material-icon-theme--php-elephant-pink.png' },
          { name: 'SQL', img: 'assets/icons/vscode-icons--file-type-sql.png' },
        ]
      }
      ]            



    },
    {
      experience: [{
        sectionTitle: "Education",
        title: "Web Application Development (DAW)",
        company: "IES Martinez Montañes",
        description: `--Backend programming languages: Java and PHP; frontend: JavaScript. 
--Frameworks: SpringBoot, Laravel, Angular. 
--Relational databases: SQL and PL/SQL for interaction. 
--Markup and styling languages: HTML, CSS, using frameworks such as TailwindCSS and Bootstrap. 
--Creation and usage of REST APIs. 
--Model-View-Controller (MVC) pattern. 
--Version control with Git and GitHub. 
--Basic knowledge of Node.js. 
--Agile methodologies (SCRUM). 
--Using Docker for working in lightweight environments. 
--Following best practices and applying SOLID principles.
`,
        skills: [
          { name: 'Java', img: 'assets/icons/devicon--java.png' },
          { name: 'Spring Boot', img: 'assets/icons/simple-icons--springboot.png' },
          { name: 'JavaScript', img: 'assets/icons/skill-icons--javascript.png' },
          { name: 'Angular', img: 'assets/icons/devicon--angular.png' },
          { name: 'HTML', img: 'assets/icons/skill-icons--html.png' },
          { name: 'CSS', img: 'assets/icons/skill-icons--css.png' },
          { name: 'Git', img: 'assets/icons/skill-icons--git.png' },
          { name: 'PHP', img: 'assets/icons/material-icon-theme--php-elephant-pink.png' },
          { name: 'Laravel', img: 'assets/icons/logos--laravel.png' },
          { name: 'Bootstrap', img: 'assets/icons/devicon--bootstrap.png' },
          { name: 'TailwindCSS', img: 'assets/icons/devicon--tailwindcss.png' },
          { name: 'MySQL', img: 'assets/icons/logos--mysql.png' },
          { name: 'SQL', img: 'assets/icons/vscode-icons--file-type-sql.png' },
          { name: 'PL/SQL', img: 'assets/icons/vscode-icons--file-type-plsql.png' },
        ]
      }]
    }
  ]

    ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
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


  getDescriptionList(desc: string): string[] {
    return desc.split("--").filter(item => item.trim() !== "");
  }



}
