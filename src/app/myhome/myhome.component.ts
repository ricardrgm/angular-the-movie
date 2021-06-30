import { Component, OnInit } from '@angular/core';
import { IMovies, MoviesServiceService } from '../shared/services/movies-service.service';


@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss']
})
export class MyhomeComponent implements OnInit {
  movies!:IMovies[];
  constructor(private moviesService: MoviesServiceService) { }

  ngOnInit(): void {
   this.moviesService.getMovies().subscribe(data=> this.movies=data);
  }

}
