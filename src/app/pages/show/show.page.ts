import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Work } from 'src/app/models/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
    selector: 'app-show',
    templateUrl: './show.page.html',
    styleUrls: ['./show.page.scss'],
})
export class ShowPage {
    private work: Work;

    constructor(route: ActivatedRoute, private workService: WorkService) { 
        const id: number = parseInt(route.snapshot.params.id, 10);
        this.load(id);
    }

    load(id: number): void
    {
        this.workService.getWorkById(id).subscribe(data => {
            this.work = data;
        }, (e) => {
            console.log(e);
        });
    }


}
