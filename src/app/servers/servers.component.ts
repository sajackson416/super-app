import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  /*  template: `
      <app-server></app-server>
      <app-server></app-server>
    `,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';


  /*  constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
    }*/

  constructor() {
    setTimeout((x = true) => {
      this.setAllowNewServer(x);
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  setAllowNewServer(value) {
    this.allowNewServer = value;
  }

}
