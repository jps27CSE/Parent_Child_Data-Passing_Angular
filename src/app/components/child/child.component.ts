import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  @Input() parentInput!: string;
  @Output() childOutput = new EventEmitter<string>();

  childMessage: string = 'i am jack from child component';

  sendMessage() {
    this.childOutput.emit(this.childMessage);
  }

  ngOnInit(): void {
    console.log(this.parentInput);
  }
}
