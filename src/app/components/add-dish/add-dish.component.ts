import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dish: Dish = {
    dish_name: '',
    dish_desc: ''
  };

  constructor(private dishService: DishService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.dish.dish_name != '' && this.dish.dish_desc != '') {
      this.dishService.addDish(this.dish);
      this.dish.dish_name = '';
      this.dish.dish_desc = '';
    }
  }

}
