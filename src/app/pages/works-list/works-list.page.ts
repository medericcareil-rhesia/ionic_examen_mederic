import { Component } from '@angular/core';
import { Work } from 'src/app/models/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.page.html',
  styleUrls: ['./works-list.page.scss'],
})
export class WorksListPage {

    private works: Array<Work>;

    constructor(private workService: WorkService) { 
        this.load();
    }

    /**
     * Load all works of arts
     * @return {void} 
     */
    load(): void
    {
        this.workService.getAllWorks().subscribe(data => {
            this.works = data;
        }, (e) => {
            console.log(e);
        });
    }
}
