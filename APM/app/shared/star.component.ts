import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'ai-star',
  templateUrl: 'app/shared/star.component.html',
  styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
  //bind to input decorator
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void{
    this.starWidth = this.rating * 86 / 5;
  }
  onClick(){
    console.log(this);
    this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
  }

}