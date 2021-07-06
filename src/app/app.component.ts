import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyect3';
  sound(n: number): void {
    const sound = new Audio();
    sound.src = `../assets/sound/note${n}.wav`;
    sound.load();
    sound.play();
  }
}
