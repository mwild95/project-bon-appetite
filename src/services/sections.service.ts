import { Injectable, Inject } from '@angular/core';

import { Section } from '../classes/Section';

import { RestService } from './rest.service';
import { UserService } from './user.service';

import { Menu } from '../classes/Menu';

@Injectable()
export class SectionsService {

    sections : Section[];
    constructor( private restService : RestService, private userService : UserService ) {

    }

    public getSection ( sectionId : string ) {
        return new Promise ( (resolve, reject) => {
            this.restService.getSection ( sectionId )
                .subscribe (
                    ( response : Section ) => {
                        let responseSection = this.castSections([response])[0];
                        resolve( responseSection ) ;
                    }, 
                    ( err ) => {
                        reject( JSON.parse( err._body ) );
                    }
                );
        } );
    }

    public getSections ( ) : Promise< Section[] >{
        return new Promise( (resolve, reject) => {
            this.restService.getSections( this.userService.getId() )
                .subscribe(
                    (response: Section[]) => {
                        this.sections = this.castSections( response );
                        resolve(response);
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
        //return this.mockSections;
    }

    public createSection ( sectionName: string ) : Promise< Section >{
        return new Promise( (resolve, reject) => {
            this.restService.createSection ( sectionName, this.userService.getId() )
                .subscribe (
                    ( response : Section ) => {
                        let newSection: Section = this.castSections([response])[0];
                        this.sections.push(newSection);
                        resolve( newSection );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    public updateSection ( restToUpdate: Section ) : Promise<Section> {
    	
        return new Promise ( ( resolve, reject ) => {
            this.restService.updateSection ( restToUpdate ) 
                .subscribe (
                    ( response : Section ) => {
                        let updatedSection : Section = this.castSections([response])[0];
                        
                        resolve(updatedSection);
                    },
                    err => { reject(JSON.parse(err._body));}
                );
        });
    }

    

    public deleteSection ( sectionId : string ) {

        return new Promise( (resolve, reject) => {
            this.restService.deleteSection ( sectionId )
                .subscribe (
                    ( response ) => {
                        resolve( response );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    private castSections( sections: any[] ) {
        for( let i=0; i<sections.length; i++ ) {
            var section = sections[i];
            if(section != null) {
                sections[i] = new Section(section);
            }
            
        }

        return sections;
    }
    
}