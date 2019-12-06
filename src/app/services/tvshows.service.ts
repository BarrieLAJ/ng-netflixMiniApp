import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ITvshowRes } from './tvshowsres,model';
import { ITvshow } from './tvshow.model';
 const apikey = "da51ab669d96ca4f1f9aa7cc589baec8"
//const baseUrl = https://api.themoviedb.org/3/
//const allMoviesUrl = https://api.themoviedb.org/3/discover/movie?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
//const searchSample = https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//const getByIdbase = "https://api.themoviedb.org/3/movie/"

@Injectable()

export class TvShowsService {
    constructor(private http: HttpClient) {

    }
    getTvshows(): Observable <ITvshowRes>{
        const getByIdbase = 'https://api.themoviedb.org/3/tv/';
        // tslint:disable-next-line: max-line-length
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
        return this.http.get<ITvshowRes>(url)
            .pipe(catchError(this.handleError<ITvshowRes>('getTvshows')));
    }
    getTvshow(id): Observable<ITvshow> {
       // return movies.find(movie => movie.id === id)
        const getByIdbase = 'https://api.themoviedb.org/3/tv/';
        const url = `${getByIdbase}${id}?api_key=${apikey}&&language=en-US`;
        return this.http.get<ITvshow>(url)
            .pipe(catchError(this.handleError<ITvshow>('getTvshow')));

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T>  => {
            console.error(error);
            return of(result as T);
        }
    }
}
