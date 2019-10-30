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
    `]

})

export class NavbarComponent {
    logIn: boolean = null

}