import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';



export interface IMovies {

  id: Number, // Identificador único para distinguir las películas.
  title: String, //título.
  poster: String //URL de un póster.
  synopsis: String //Descripción breve.
  genres: String[], // Géneros de la película: "Adventure", "Action", "Romantic Comedy" etc.
  year: Number, //Año de estreno.
  director: String, //Director.
  actors: String[] // Nombre de los actores principales.
  hours: String[] // Horario de proyección. ejemplo: Wednesday 19:30, 22:30 Indica que se puede ver la película los miércoles a las 19:30h y a las 22:30h.
  room: Number //Número de la sala valor entre 1 y 5.
}

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  // obMovies!:Observable<IMovies[]>;
  movies!: IMovies[];

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(environment.url_movies);
  }

  getMovie(id: Number): Observable<IMovies | undefined> {
    let obMovies!: Observable<IMovies[]>;
    let movie!: Observable<IMovies | undefined>;

    obMovies = this.http.get<IMovies[]>(environment.url_movies);
    movie = obMovies.pipe(map((x:any) => {return x.movies.find((element: any) => element.id == id)}));

    // obMovies.subscribe((data: any) => {console.log(data);});
    // movie.subscribe((data: any) => {console.log(data);});

    // obMovies.subscribe((data: any) => {
    //     const movie_s = data.movies.find((element: any) => element.id == id) as IMovies
    //     console.log(movie_s);
    // });
    return movie;
  }
}
