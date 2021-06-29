import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';


export interface IMovies{

  id:Number, // Identificador único para distinguir las películas.
  title:String, //título.
  poster:String //URL de un póster.
  synopsis:String //Descripción breve.
  genres:String[], // Géneros de la película: "Adventure", "Action", "Romantic Comedy" etc.
  year:Number, //Año de estreno.
  director: String, //Director.
  actors:String[] // Nombre de los actores principales.
  hours:string [] // Horario de proyección. ejemplo: Wednesday 19:30, 22:30 Indica que se puede ver la película los miércoles a las 19:30h y a las 22:30h.
  room: Number //Número de la sala valor entre 1 y 5.
}

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  // obMovies!:Observable<IMovies[]>;
  movies!:IMovies[];

  constructor(private http:HttpClient) { }

  private fetchMovies(): Observable<any>{
    // return this.http.get<IMovies[]>(environment.url_movies);
    let a = this.http.get(environment.url_movies)
    console.log(a);
    return a;
    // return this.http.get(environment.url_movies);
  }

  getMovies():IMovies[]{
    // let obMovies!:Observable<IMovies[]>;
    //this.fetchMovies().subscribe(data => this.movies = data);
    this.http.get(environment.url_movies).subscribe(data => console.log(data));
    return this.movies;
   }

  getMovie(id:Number):IMovies{
    let obMovies!:Observable<IMovies[]>;
    let movie:IMovies;

    obMovies=this.fetchMovies();
    obMovies.subscribe(data => this.movies = data);

    movie=this.movies.find(element => element.id=id) as IMovies;
    return movie;
  }
}
