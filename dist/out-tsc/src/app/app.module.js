import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { Camera } from '@ionic-native/camera/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [
            BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            HttpClientModule
        ],
        providers: [
            Camera,
            // WebView,
            Stripe,
            OneSignal,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map