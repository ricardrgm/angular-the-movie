import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovies, MoviesServiceService } from '../shared/services/movies-service.service';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.scss']
})
export class MymovieComponent implements OnInit {
  movies!: IMovies | undefined;
  idMovie!: Number;

  constructor(
    private moviesService: MoviesServiceService,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idMovie = params.id;
      });

    this.moviesService.getMovie(this.idMovie).subscribe(data => this.movies = data);
  }

  getTitle(): String | undefined {
    return this.movies?.title;
  }
  getPoster(): String | undefined {
    return this.movies?.poster;
  }
  getSynopsis(): String | undefined {
    return this.movies?.synopsis;
  }
  getGenres(): String[] | undefined {
    return this.movies?.genres;
  }
  getYear(): Number | undefined {
    return this.movies?.year;
  }
  getDirector(): String | undefined {
    return this.movies?.director;

  }
  getActors(): String[] | undefined {
    return this.movies?.actors;
  }
  getSchedule(): String[] | undefined {
    return this.movies?.hours
  }

  editar(){
    
  }
}



