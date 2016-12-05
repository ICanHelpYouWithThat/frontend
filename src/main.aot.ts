
import './app/polyfills.ts';

import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { environment } from './app/environments/environment';
import { AppModuleNgFactory } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
