import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DbDataService} from "../services/db-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studyWeekendFront';
  myControl = new FormControl();
  options: string[];

  constructor(
    private dbService: DbDataService,
  ) {
  }

  ngOnInit(): void {

  }

  private async loadData(query: string): Promise<any> {
    const datas = await this.dbService.getData(query);

    const dataLen = datas.length;

    this.options = [];

    for (let i = 0; i < dataLen; i++) {
      this.options.push(datas[i].rawData);
    }

  }

  onChangeSearchBox() {
    this.loadData(this.myControl.value);
  }

}
