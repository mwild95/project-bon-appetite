import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

    values : {} = {};

    constructor ( ) {

        this.values = require('./app.constants');
    }

    public get ( valueName : string ) {
        return this.values[ valueName ];
    }

}