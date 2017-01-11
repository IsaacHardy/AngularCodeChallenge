import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit, OnChanges {
  @Output() public itemIsSelected = new EventEmitter();
  @Input() private imageUrl: string;
  @Input() private itemName: string;
  @Input() private movementCounter: number;

  private checked: boolean = false;
  private isFrozen: boolean = false;

  constructor() { }

  public ngOnInit() {

  }
  public ngOnChanges() {
    if (this.movementCounter === 5) {
      this.isFrozen = true;
    }
  }
  public highlightItem() {
    this.checked = !this.checked;

    if (this.checked && this.movementCounter <= 5) {
      this.itemIsSelected.emit(true);
    } else {
      this.itemIsSelected.emit(false);
    }
  }

}
