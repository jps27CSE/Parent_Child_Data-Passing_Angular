import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  parentMessage: string = 'from parent message';

  message: string = '';

  parentFunction(event: string) {
    this.message = event;
  }

  ngOnInit(): void {}
}
