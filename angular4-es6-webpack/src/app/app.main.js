import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app.module';

if (false) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);