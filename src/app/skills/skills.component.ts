import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    "C++", "Rust", "Python", "JavaScript", "Kotlin", 
    "Java", "GPT", "Linux", "Android Studio", "iOS",
    "Git", "Computer Vision"
  ];
  colors = [
    "#F24236", "#3DA5D9", "#FFD131", "#60D394"
  ];
  getRandomColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    console.log(randomIndex)
    return this.colors[randomIndex];
  }
  }
