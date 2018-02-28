import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-admi',
  templateUrl: './navbar-admi.component.html',
  styles: []
})
export class NavbarAdmiComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  salirAd() {
    sessionStorage.removeItem('Administrador');
    this._router.navigate(['/login']);
  }

}
