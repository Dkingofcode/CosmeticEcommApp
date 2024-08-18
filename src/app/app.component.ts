import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AboutComponent } from "./about/about.component";
import { FaceMenuComponent } from './face-menu/face-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, CategoriesComponent, AboutComponent, FaceMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MarketingApp';
}




















