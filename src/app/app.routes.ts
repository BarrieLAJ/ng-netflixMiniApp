import { Routes } from '@angular/router';
import { FavoriteMoviesComponent } from './favorite.component';
import { TvShowsComponent } from './tvshows.component';
import { MovieDetailsComponent } from './details/movie-details.component';
import { TvShowDetailsComponent } from './details/tvshow-details.component';
import { SearchComponent } from './search.component';
import { MoviesComponent } from './movies.component';

export const appRoutes:Routes =[
    {path: 'movie/:id', component: MovieDetailsComponent},
    {path: 'tvshow/:id', component: TvShowDetailsComponent},
    {path: 'search/:title', component: SearchComponent},
    {path:'movies', component: MoviesComponent},
    {path: '', redirectTo:'/movies', pathMatch: 'full'},
    {path: 'tvshows', component: TvShowsComponent},
    {path: 'favorite', component: FavoriteMoviesComponent},
]