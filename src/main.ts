import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { environment } from './environments/environment';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(routes, withPreloading(PreloadAllModules)),
  
    provideIonicAngular(),


    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    

    provideFirestore(() => getFirestore()),
    

    provideAuth(() => getAuth()),

    provideRemoteConfig(() => {
      const rc = getRemoteConfig();

      rc.settings.minimumFetchIntervalMillis = 60000; 
      rc.defaultConfig = {
        'show_edit_button': true, 
      };
      return rc;
    }),
  ],
}).catch((err) => console.error(err));