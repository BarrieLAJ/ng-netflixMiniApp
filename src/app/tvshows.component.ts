import { Component, OnInit } from '@angular/core'
import { TvShowsService } from './services/tvshows.service'

@Component({
    selector: 'tv-shows',
    template: `
    <div class="row">
        <h4 class="col-sm-5 text-white" style="margin-left: 0px">TV Shows</h4>
        <div class="col-sm-7"></div>
        <div class="row">
                <div class="well thumbnail m-2 col-md-3" [routerLink]="['/tvshow', tvshow.id]"  *ngFor="let tvshow of tvshows"> 
                            <img class="img-responsive img-border" height="80%" my-5 width="100%"  [src]="baseimgUrl+tvshow?.poster_path" [alt]="tvshow?.name"/><br>
                            <span class="movie-title text-align-center text-white font-weight-16">{{tvshow?.name}}</span><br>
                            <span class="mr-1 text-white font-weight-16">Popularity:<em class="badge bg-danger text-white">{{tvshow?.popularity}}</em></span>
                            <span class="mr-1 float-right text-white font-weight-16">Vote:<em class="badge bg-success text-white">{{tvshow?.vote_count}}</em></span><br>
                            <span class="clearfix mr-1 text-white font-weight-16">Released: <em class="float-right">{{tvshow?.first_air_date | date}}</em></span>
                            
                </div>
        </div>
    </div>`,
    styles: [`
        .thumbnail{ 
          cursor: pointer;
        }
        .thumbnail:hover{
          background-color: rgba(20,20,20,0.5);
        }
    `]
})

export class TvShowsComponent implements OnInit {
    tvshows:any
    baseimgUrl =  "https://image.tmdb.org/t/p/w300"
    constructor(private tvshowsService: TvShowsService){

    }
    ngOnInit(){
        this.tvshows =  this.tvshowsService.getTvshows()
    }
}