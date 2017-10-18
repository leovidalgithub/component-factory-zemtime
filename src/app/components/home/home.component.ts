import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // HEADER DATA
  private headerData: Object = {
    sectionData: {
      title: this.translateService('Dashboard'),
      titleClass: 'mdi mdi-bell-outline',
      notificationShow: true,
      notificationCondition: '1',
      notificationResult: '4',
      span: this.translateService('Notifications'),
      spanName: ' Barcelona',
      spanShow: true
    },
    actionsShow: {
      showActions: true
    },
    actionButtons: [
      {
        text: this.translateService('Accept'),
        buttonClass: 'bt-act',
        title: false,
        show: true,
        clickAction: function () {
          alert('clicar el botón 1');
        }
        // clickParameters: '',
      }, {
        text: this.translateService('Cancel'),
        buttonClass: 'bt-pos',
        title: false,
        show: true,
        clickAction: function () {
          alert('clicar el botón 2');
        },
        // clickParameters: '',
      }
    ]
  };

  // SIDEBAR DATA
  private sidebarData: object = {
    headSidebar: {
      logoLink: 'dashboard',
      userLink: 'dashboard',
      userName: 'Nombre',
      closeMenu: this.translateService('Close Menu'),
      reportBug: this.translateService('Report Bug'),
      signOut: this.translateService('Sign Out')
    },
    dataSidebar: [
      {
        roleAuth: [],
        url: 'dashboard',
        icon: 'mdi-bell-outline',
        title: this.translateService('Notifications')
      }, {
        roleAuth: [],
        url: 'calendars',
        icon: 'mdi-calendar-range',
        title: this.translateService('Calendars')
      },
    ],
  };

  // FAKE TRANSLATION SERVICE
  translateService(myValue): Observable<string> {
    return Observable.of(myValue)
      .map(value => value.toLocaleUpperCase());
  }

  constructor() { }
  ngOnInit() { }

}
