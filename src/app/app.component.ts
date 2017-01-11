import { Component, OnInit, Input } from '@angular/core';
import { ImageItemComponent } from './image-item/image-item.component';
import { IMAGE_URLS } from './mock.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() private itemIsSelected;

  public dadCarryList: Array<any> = [];
  public sonCarryList: Array<any> = [];
  public itemsInQueue: Array<any> = [];
  public highlightImage: boolean = false;
  public movementCounter: number = 0;
  public imageUrl: string;
  public mockData: Array<any> = IMAGE_URLS;

  public ngOnInit() {
    this.mockData.forEach((item) => {
      this.dadCarryList.push(item);
    });
  }
  private addItemToQueue(event, item) {
    if (event) {
      this.highlightImage = true;
      this.itemsInQueue.push(item);
    } else {
      this.highlightImage = false;
      this.itemsInQueue.splice(item)
    }
  }
  private pass() {
    this.itemsInQueue.forEach((item) => {
      item.isDadHolding = !item.isDadHolding;
      if (item.isDadHolding) {
        let index = this.sonCarryList.indexOf(item);
        this.sonCarryList.splice(index, 1);
        this.dadCarryList.push(item);
      } else {
        let index = this.dadCarryList.indexOf(item);
        this.dadCarryList.splice(index, 1);
        this.sonCarryList.push(item);
      }
    });
    this.itemsInQueue = [];
  }
}
