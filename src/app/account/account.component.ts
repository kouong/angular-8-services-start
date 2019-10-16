import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})
export class AccountComponent {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){}

  @Input() account: {name: string, status: string};
  @Input() id: number;


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}











// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrls: ['./account.component.css'],
//   providers: [LoggingService]
// })
// export class AccountComponent {

//   constructor(private loggingService: LoggingService){}

//   @Input() account: {name: string, status: string};
//   @Input() id: number;
//   @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


//   onSetTo(status: string) {
//     this.statusChanged.emit({id: this.id, newStatus: status});
//     this.loggingService.logStatusChange(status);
//   }
// }
