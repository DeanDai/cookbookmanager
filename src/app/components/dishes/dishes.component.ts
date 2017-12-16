import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[];
  editState: boolean = false;
  dishToEdit: Dish

  constructor(private dishService: DishService) { }

  ngOnInit() {
    console.log('ngOninit ran');
    this.dishService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
      console.log(this.dishes);
    });
  }

  deleteDish(event, item: Dish) {
    this.clearState();
    if(confirm('Do you want to delete this dish?')) {
      this.dishService.deleteDish(item);
    }
  }

  editDish(event, item: Dish) {
    if(!this.editState) {
      this.editState = true;
      console.log(item);
      this.dishToEdit = item;
      //this.dishService.updateDish(this.dishToEdit);
    }
  }

  updateDish(item: Dish) {
    this.dishService.updateDish(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.dishToEdit = null;
  }
}
