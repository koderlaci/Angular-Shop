import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a test", "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"),
    new Recipe("A Test Recipe", "This is a test", "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
