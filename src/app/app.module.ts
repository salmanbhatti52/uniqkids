import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { File } from '@ionic-native/file/ngx';
import { ImagePicker} from '@ionic-native/image-picker/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule,
  Ng2SearchPipeModule
  ],
  providers: [
  Camera,
  // WebView,
  Stripe,
  OneSignal,
  FileTransfer,
  NavParams,
  // SplashScreen,
  // File,
  // WebView,
  ImagePicker,
  StatusBar,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
