import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Restaurant } from '../../classes/Restaurant';
import { RestaurantsService } from '../../services/restaurants.service';

import { CacheService } from '../../services/cache.service';

import { ModalComponent } from '../../modal/modal.module';

@Component({
  templateUrl: './src/orders/pending/pending.template.html',
  styleUrls: ['./app/restaurants/restaurant.css']
})

export class CompleteOrdersComponent { 

	constructor ( ) {

	}

	ngOnInit () {



	}
}
