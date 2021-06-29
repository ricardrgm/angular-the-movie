import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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
    this.movies=this.moviesService.getMovies();
  }

}
