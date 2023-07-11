import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  text = 'Test Text';
  pi: number = 3.14159265359;
  a: number = 0.259;
  b: number = 1.3495;
}
