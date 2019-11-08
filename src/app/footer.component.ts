import { Component } from '@angular/core'

@Component({
    selector: 'footer-app',
    templateUrl: './footer.component.html',
    styles: [`
        .footer{
            margin: auto;
            width:100%'
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
            margin: 1em;
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