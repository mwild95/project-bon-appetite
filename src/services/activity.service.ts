import { Injectable, Component, ViewChild } from '@angular/core';
import { MdProgressBar, MdSnackBar } from '@angular/material';

import { RestService } from './rest.service';

import { RestaurantsService } from './restaurants.service';
import { CacheService } from './cache.service';


@Injectable()
export class ActivityService {

    
    progressBar: MdProgressBar;

    constructor ( private cache: CacheService, public snackBar: MdSnackBar) {

    }

    isLoading(){
      this.progressBar.mode = "indeterminate";
    }

    isFinished(message: string){
       this.progressBar.mode = "";
       if(typeof message != 'undefined'){
         this.snackBar.open(message, undefined,{
           duration: 750,
         });
       }
       
    }

    setProgressBar( progBar: MdProgressBar ){
      this.progressBar = progBar;
    }
    
}