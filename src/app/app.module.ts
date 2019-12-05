import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { NetFlixMiniComponent } from './netflixmini.component';
import { NavbarComponent } from './navbar.component';
import { FavoriteMoviesComponent } from './favorite.component';
import { TvShowsComponent } from './tvshows.component';
import { MovieDetailsComponent } from './details/movie-details.component';
import { TvShowDetailsComponent } from './details/tvshow-details.component';
import { SearchComponent } from './search.component';
import { FooterComponent } from './footer.component';
import { MoviesService } from './services/movies.service';
import { TvShowsService } from './services/tvshows.service';
import { appRoutes } from './app.routes';
import { MoviesComponent } from './movies.component';
//api = http://www.omdbapi.com/?apikey=da0f4436&s=avengers
@NgModule({
  declarations: [
    NetFlixMiniComponent,
    NavbarComponent,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    TvShowsComponent,
    MoviesComponent,
    SearchComponent,
    FavoriteMoviesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ MoviesService, TvShowsService  ],
  bootstrap: [NetFlixMiniComponent]
})
export class AppModule { }
