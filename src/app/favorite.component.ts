import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'favorite-movies',
    template: `
        <div class="row">
            <h1>Favorite Shows</h1>
        </div>
    `
})

export class FavoriteMoviesComponent implements OnInit {
    favoriteMovies:[] = []
    ngOnInit(){
        
    }

}