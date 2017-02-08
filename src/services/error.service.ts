import { Injectable, Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { RestService } from './rest.service';

import { RestaurantsService } from './restaurants.service';
import { CacheService } from './cache.service';


@Injectable()
export class ErrorService {

    constructor ( public dialog: MdDialog, private cache: CacheService) {

    }

    showError (errorBody ){
        this.cache.put("errorDetails", errorBody);
        let errorDialogRef = this.dialog.open(ErrorDialog);
    }
    
}

@Component({
  template: `
      <h1 md-dialog-title>Something Went Wrong!</h1>
      <div md-dialog-content>
      We're very sorry. Looks like something went wrong! Please try again.
      </div>
<div md-dialog-actions>
    <button md-button type='button' class='btn btn-default' (click)='dialogRef.close()'>Ok</button>
</div>

  `
})
export class ErrorDialog {
  private errorDetails;
  constructor(public dialogRef: MdDialogRef<ErrorDialog>, private cache: CacheService) {
      this.errorDetails = this.cache.get("errorDetails");
  }
}