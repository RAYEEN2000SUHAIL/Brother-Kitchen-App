import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input()
  stars!: number;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'hieght.rem': this.size,
      'marginRight.rem': this.size / 6
    }
  }

  getStarImage(current: number): string {
    const priviousHalf = current - 0.5;
    const imageName = this.stars >= current ? 'star-full' : this.stars >= priviousHalf ? 'star-half' : 'star-empty';
    return `/assets/star/${imageName}.svg`
  }
}
