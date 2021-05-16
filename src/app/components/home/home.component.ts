import { Component, OnInit } from '@angular/core';
import { OmdbServices } from '../../services/omdb.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTitle;
  movieList = [];

  constructor(private omdbService : OmdbServices) { }

  searchMovie(title) {
    this.omdbService
      .findMovieByTitle(title)
      .then((result) => (this.movieList = result.Search));
  }

  ngOnInit(): void { }

}
