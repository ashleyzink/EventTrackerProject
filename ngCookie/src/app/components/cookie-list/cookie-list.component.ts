import { Component, OnInit } from '@angular/core';
import { Cookie } from 'src/app/models/cookie';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-cookie-list',
  templateUrl: './cookie-list.component.html',
  styleUrls: ['./cookie-list.component.css']
})
export class CookieListComponent implements OnInit {

  cookies: Cookie[] = [];
  selected: Cookie = null;
  newCookie: Cookie = new Cookie();
  editCookie: Cookie = null;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loadCookie();
  }

  loadCookie(): void{
    this.cookieService.index().subscribe(
      (cookies) => {
        this.cookies = cookies;
      },
      (fail) => {
        console.error('CookieListComponent.loadCookie(): Error getting cookies');
        console.error(fail);
      }
    )
  }


  addCookie(cookie: Cookie): void {
    this.cookieService.create(cookie).subscribe(
      (cookies) => {
        this.newCookie = new Cookie();
        this.loadCookie();
      },
      (fail) => {
        console.error('CookieListComponent.loadCookie(): Error getting cookies');
        console.error(fail);
      }
    )

  }

  updateCookie(cookie: Cookie) {
    this.cookieService.update(cookie).subscribe(
      (cookies) => {
        this.editCookie = null;
        this.loadCookie();
      },
      (fail) => {
        console.error('CookieListComponent.loadCookie(): Error getting cookies');
        console.error(fail);
      }
    )
  }

  deleteCookie(cookieId: number): void {
    this.cookieService.destroy(cookieId).subscribe(
      (data) => {
        this.loadCookie();
      },
      (fail) => {
        console.error('CookieListComponent.deleteCookie(): error deleting cookie');
        console.error(fail);
      }
    );
  }

  setEditCookie() {
    this.editCookie = Object.assign({}, this.selected);
  }

  cookieCount(): number {
    return this.cookies.length;
  }

  displayCookie(cookie: Cookie) {
    this.selected = cookie;
  }




}
