import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [AccountsService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   accounts = [
//     {
//       name: 'Master Account',
//       status: 'active'
//     },
//     {
//       name: 'Testaccount',
//       status: 'inactive'
//     },
//     {
//       name: 'Hidden Account',
//       status: 'unknown'
//     }
//   ];

//   onAccountAdded(newAccount: {name: string, status: string}) {
//     this.accounts.push(newAccount);
//   }

//   onStatusChanged(updateInfo: {id: number, newStatus: string}) {
//     this.accounts[updateInfo.id].status = updateInfo.newStatus;
//   }
// }
