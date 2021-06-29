import { Component, OnInit } from '@angular/core';
import { IMovies, MoviesServiceService } from '../shared/services/movies-service.service';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.scss']
})
export class MymovieComponent implements OnInit {
  movies!:IMovies[];

  constructor(private moviesService: MoviesServiceService) { }

  ngOnInit(): void {
  
  }

}
