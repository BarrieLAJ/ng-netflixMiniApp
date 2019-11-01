import { Component, OnInit } from '@angular/core'
import { TvShowsService } from '../services/tvshows.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: 'tvshow-details.component.html',
    styles: [`
        .text-white{
            color: #fff !important;
            font-size: 1.0em !important;
        }
        .movie-title{
            font-size: 2.0em;
            letter-spacing: 3px;
            font-weight: bolder;
            margin-buttom: 5px;
        }
        movie-overview{
            font-size: 0.02em;
            font-weight: 20px;
            text-align: justify;
            max-height: 150px;
            max-width: 300px;
            overflow: hidden;
        }
        .text-white>div>span{
            float: right;
        }
        .list-genre>li{ 
            margin: 20px;
        }
        .row > h4{
            margin-top: 10px;
        }
    `]
})

export class TvShowDetailsComponent implements OnInit {
    tvshow:any
    constructor(private tvshowService:TvShowsService, private router:ActivatedRoute){

    }
    ngOnInit(){
        this.tvshow = this.tvshowService.getTvshow(+this.router.snapshot.params['id'])
        console.log(this.tvshow)
    }
}