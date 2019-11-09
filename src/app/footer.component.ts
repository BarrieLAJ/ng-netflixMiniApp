import { Component } from '@angular/core'

@Component({
    selector: 'footer-app',
    templateUrl: './footer.component.html',
    styles: [`
        .footer .grid-wrap{
            margin: auto;
        }
        @media (min-width: 720px){
            .grid-wrap{
                display: grid;
                grid-template-column: 1fr 1fr 1fr 1fr;
            }
            .grid{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                grid-column:  1/5;
            }
            .grid .footer-link{
                flex: 1;
                display: inherit;
                align-self: center;
            }
            .social{
                grid-column: 5/6;
            }
        }
        .grid{
            text-align: center;
        }
        .footer-link{
            margin: 0.2em;
            text-align: center;
            text-decoration: none;
            color: rgb(224, 218, 218);
        }
        .footer-link:hover{
            color: rgb(192, 186, 186);
        } 
        .social{
            margin: 5px;
            text-align: center;
        }
        .social a{
            margin: 0.5em;
            text-align: center;
            text-decoration: none;
            color: rgb(224, 218, 218);
        }
        .copyright{
            margin: 5px;
            text-align: center;
        }
    `]
})

export class FooterComponent {
    currentDate = Date.now()
    theDate = new Date(this.currentDate)
    currentYear = this.theDate.getFullYear();
}