import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { removeWish } from '../wishList.actions';
import { LoaderService } from '../loader.service';

interface wishListArray {
  wishList: Array<any>;
}

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishListItems: Observable<any[]>;

  wishArray: Array<any> = [];

  constructor( private _wishListStore: Store<{ wishList: Array<any> }> , public _isLoading:LoaderService) { 

    this.wishListItems = this._wishListStore.pipe(
      select((state: any) => state.wishList)
    );
  
}

  ngOnInit(): void {

    this.wishListItems.subscribe((res) => {
      this.wishArray = res;
      console.log(res);
    });
  }

  deleteItem(wishArrayItem: any) {
    this._wishListStore.dispatch(
      removeWish({ cardItem: wishArrayItem })
    );
  }

}

