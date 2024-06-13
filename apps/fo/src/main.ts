import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// start with standalone component
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// start with module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
