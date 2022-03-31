import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { EquityPositions } from './EquityPositions.model';

@Component({
  selector: 'app-root',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'equity.positions.ui';
  visible=false;
  
  displayEquity: EquityPositions[] = [];

  constructor(private appService: AppService) { }

  onFetchRequest() {

    this
      .appService
      .getEquityPositions()
      .subscribe((equity: EquityPositions[]) => {
        this.displayEquity = equity;

        console.log(this.displayEquity);
      })
  }

  onSave() {
    this
      .appService
      .executeTrade()
      .subscribe(x =>
        this.visible=true
      )
  }
}
