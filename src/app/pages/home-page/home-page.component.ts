import { Component, OnInit } from '@angular/core';
import { AppState } from '../../reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn } from '../../core/auth/auth.selectors';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  isLoggedIn$! : Observable<boolean>;

  constructor(private store: Store<AppState>){
  }


  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    )
  }

}
