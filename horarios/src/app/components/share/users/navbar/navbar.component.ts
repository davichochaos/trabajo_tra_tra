import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  salirUs() {
    sessionStorage.removeItem('Usuarios');
    this._router.navigate(['/login']);
  }

}
