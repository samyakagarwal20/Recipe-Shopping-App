import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe(
      'Crispy Corn',
      'A blend of spices with crispy corn',
      'https://static.toiimg.com/thumb/93714345.cms?imgsize=72836&width=800&height=800'
    ),
    new Recipe(
      'Momos',
      'Steamed, filled dumplings with sauce',
      'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/06/08172820/Untitled-design-2-1.jpg?tr=w-1200,h-900'
    )
  ];

}
