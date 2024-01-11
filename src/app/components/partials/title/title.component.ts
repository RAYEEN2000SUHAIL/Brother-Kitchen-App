import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
@Input()
title!:string;

@Input()
fontSize?:string = '1.7rem';

@Input()
margin?:string='1rem 0 1rem 0.3rem';
}
