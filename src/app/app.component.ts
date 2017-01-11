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

  private dadCarryList: Array<any> = [];
  private sonCarryList: Array<any> = [];
  private itemsInQueue: Array<any> = [];
  private highlightImage: boolean = false;
  private imageUrl: string;
  private mockData: Array<any> = IMAGE_URLS;

  public ngOnInit() {
    this.mockData.forEach((item) => {
      this.dadCarryList.push(item);
    });
  }
  private addItemToQueue(event, item) {
    if (event && item.movementCounter < 5) {
      this.highlightImage = true;
      this.itemsInQueue.push(item);
    } else if (!event && item.movementCounter < 5) {
      this.highlightImage = false;
      this.itemsInQueue.splice(item)
    }
  }
  private pass() {
    this.itemsInQueue.forEach((item) => {
      item.isDadHolding = !item.isDadHolding;
      if (item.isDadHolding) {
        let index = this.sonCarryList.indexOf(item);

        this.dadCarryList.push(item);
        this.sonCarryList.splice(index, 1);

        ++item.movementCounter;
      } else {
        let index = this.dadCarryList.indexOf(item);

        this.sonCarryList.push(item);
        this.dadCarryList.splice(index, 1);

        ++item.movementCounter;
      }
    });
    this.itemsInQueue = [];
  }
  private reset() {
    this.itemsInQueue = [];
    this.dadCarryList = [];
    this.sonCarryList = [];

    this.mockData.forEach((item) => {
      item.movementCounter = 0;
      item.isDadHolding = true;
      
      this.dadCarryList.push(item);
    });
  }
}
