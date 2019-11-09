import { Component } from '@angular/core'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles:[`
        .navbar-brand{
            font-weight: bolder;
            letter-spacing: 0.01em;
            font-size: 2.0em;
        }
        nav{
            display: block !important;
            background-color: rgba(25, 25, 27, 0.8);
            border-radius: 1%;
        }
        @media all and (max-width: 969px){
            nav .name{
                display: none;
            }
            nav .logo{
                display: inline-block;
                margin-right: 0px;
            }
        }
        .logo {
            display: none;
        }
        nav .form-inline>input{
            border: none;
            border-bottom: rgb(185, 7, 7)  1px solid;
            border-top-left-radius: 5%;
            border-bottom-left-radius: 5%;
            background: none;
            color: white;
            text-align: center;
            text-justify: auto;
        }
        nav .form-inline>input:focus{
            outline: none;
            border-top-left-radius: 5%;
            border-bottom-left-radius: 5%;
            border-right: none;
            border-top-right-radius: none;
            border-bottom-right-radius: none;
            color: white;
            text-align: center;
            text-justify: auto;
        }
        nav .form-inline>button{
            border: none;
            outline: none;
            color: rgb(185, 7, 7);
            background: none;
        }
        nav .form-inline>button:hover{
            border-radius: 100px;
            background: rgba(50,50,50,0.4);
        }
        nav .form-inline>button>i{
            background: none !important;
        }
        ul {
            text-align: center;
        }
    `]

})

export class NavbarComponent {
    logIn: boolean = null

}