import {Component, OnInit} from '@angular/core';
import {cars} from 'src/database/data';
import {ICar} from '../../../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[] = cars;

  constructor() {
  }

  ngOnInit(): void {
  }

}
