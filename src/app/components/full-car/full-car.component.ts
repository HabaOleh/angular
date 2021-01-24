import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {log} from 'util';
import {ICar} from '../../../interfaces';

@Component({
  selector: 'app-full-car',
  templateUrl: './full-car.component.html',
  styleUrls: ['./full-car.component.css']
})
export class FullCarComponent implements OnInit {

  @Input()
  fullCar: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.fullCar = value);
  }

  ngOnInit(): void {
  }

}
