import { Component, ViewChild } from '@angular/core';
import { ActivityService } from './services/activity.service';

@Component({
  selector: 'app',
  templateUrl: './src/app.template.html'
})

export class AppComponent {

	@ViewChild('progressBar')
    progressBar: MdProgressBar;

	constructor(private activityService : ActivityService){

	}

	ngOnInit(){
		this.activityService.setProgressBar(this.progressBar);
	}
}