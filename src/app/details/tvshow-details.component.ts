import { Component, OnInit } from '@angular/core'
import { TvShowsService } from '../services/tvshows.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './tvshow-details.component.html',
    styles: [`
    @media(min-width: 50rem){
        .backdrop-wraper .grid .content-wrap{
            position: absolute;
            top: 30%;
            left: 10%;
        }
        .backdrop-wraper {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .tvshow-info{
            display: flex;
            flex-flow: wrap;
        }
        .info-wrap{
            flex: 1;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-end;
            justify-content: space-around;
        }
    }
    .backdrop-wraper .bg-img{
        position: absolute;
        left: 0px;
        width: 100%;
        height: 300px;
        z-index: -1;
        opacity: 0.5;
    }
    .backdrop-wraper {
        height: 300px;
        color: #eaeaea;
        margin-bottom: 2em;
    }
    .backdrop-wraper .grid {
        column: span 2;
    }
    @media all and (max-width: 515px){
        .backdrop-wraper .grid .content-wrap{
            position: absolute;
            top: 65%;
            left: 10%;
        }
    }
    .backdrop-wraper .grid .content-wrap{
        padding: 1rem;
        box-shadow: black -10px 10px 20px;
        height: auto; 
    }
    .tvshow-title{
        color: #eaeaea;
        font-size: 1.5em;
        letter-spacing: 3px;
        font-weight: bolder;
        margin-bottom: 15px;
    }
    .info-wrap {
        display: flex;
        flex-flow: row nowrap;
        align-content: flex-end;
        justify-content: space-between;
        background-color: rgba(20,20,20,0.4);
        margin: 1em;
        max-height: auto;
        border-radius: 1%;
    }
    .info-wrap .info{
        flex: 2  content auto;
        text-align: left;
        padding: 1em;
        border-left: 1px solid lightgreen;
        font-size: 1em;
        color: rgb(224, 218, 218)
    }
    .info-wrap .pad-right{
        flex: 1;
        padding: 1em;
        text-align: right;
        font-size: 1em;
        color: #eaeaea;
    }
    .tvshow-overview1{
        color: #eaeaea !important;
        font-size: .8em;
        font-weight: 20px;
        text-align: justify;
        max-height: 110px;
        max-width: 300px;
        overflow: hidden;
    }
    tvshow-overview{
        font-wight: normal;
        font-size: 2em;
        line-height: 3em;
        letter-spacing: .04em;
        word-spacing: normal;
        text-align: justify;
    }
    .genres ul,
    .casts ul{
        list-style: none;
        display: flex;
        flex-flow: row wrap;
    }
    .genre,
    .cast{ 
        flex: 1;
        padding: 2em;
    }
    .sec-name{
        margin-top: 10px;
    }

`]
})

export class TvShowDetailsComponent implements OnInit {
    tvshow:any
    baseimgUrl =  "https://image.tmdb.org/t/p/w500"
    constructor(private tvshowService:TvShowsService, private router:ActivatedRoute){

    }
    ngOnInit(){
        this.tvshow = this.tvshowService.getTvshow(+this.router.snapshot.params['id'])
        console.log(this.tvshow)
    }
}