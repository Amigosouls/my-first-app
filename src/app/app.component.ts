import { Component } from '@angular/core';
import { Themes } from './themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  constructor(private themesList: Themes){}
  changeTheme(themeName: string){
    this.themesList.switchTheme(themeName);
  }
}
