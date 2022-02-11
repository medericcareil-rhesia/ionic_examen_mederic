import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation } from '@capacitor/geolocation';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    work = new Work;
    constructor(
        private geocoder: NativeGeocoder,
        private router: Router,
        private toastCtrl: ToastController,
        private workService: WorkService
    ) { }

    ngOnInit() {
        this.fillPosition()
    }

    /**
     * Take user position
     * @return {promise<void>}
     */
    async fillPosition(){
        Geolocation.watchPosition({enableHighAccuracy: true}, async (position, error) => {
            if(!error){
                const results = await this.geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude);
                const address = results.pop();
                console.log(address);
                if(address.locality){
                    this.work.location = address.locality;
                }
            }
        });
    }

    /**
     * Add new work
     * @return {void}
     */
    add(){
        this.workService.addWork(this.work).subscribe(async () => {
            const date: Date = new Date();
            this.work.createdAt = date.toString();
            const toast = await this.toastCtrl.create({
                message: 'Votre oeuvre à été ajoutée avec succès',
                duration: 4500,
                color: 'success',
            });
            toast.present();
            this.router.navigate(['/works-list']);
        });
    }
}
