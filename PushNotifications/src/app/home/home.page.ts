import { Component } from '@angular/core';
import { Plugins, PushNotificationToken } from '@capacitor/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	token : string = '';

	ngOnInit(){
		Plugins.PushNotifications.addListener("registration", (token: PushNotificationToken)=>{
			console.log('TOKEN: ' + JSON.stringify(token));
			this.token = token.value;
		});
	}

	requestPermission(){
		Plugins.PushNotifications.register();
	}
}



// TOKEN: fw3eWbtO2oQ:APA91bEUPOZqrTvg1G2kgFEVfArPqsNpnlRy_U3OedzcnvQEaByNyBRCVLKgcEgmUrwxEWu6zl0nFE_GKnp78UH8IX3hzqrImR2kqmGNDVf8cWDtVeLGvIY-1haW61o9VMO2Ftsa9vy7