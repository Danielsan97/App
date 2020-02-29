import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/pages/home/Inicio',
      icon: 'home'
    },
    {
      title: 'Iniciar Sesión',
      url: '/pages/login/Iniciar Sesión',
      icon: 'log-in'
    },
    {
      title: 'Cursos',
      url: '/pages/courses/Cursos',
      icon: 'book'
    },
    {
      title: 'Calificaciones',
      url: '/pages/ratings/Calificaciones',
      icon: 'star-half'
    },
    {
      title: 'Asistencias',
      url: '/pages/assistance/Asistencias',
      icon: 'checkbox'
    },
    {
      title: 'Acerca de',
      url:'/pages/about/Acerca de',
      icon: 'information-circle'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
