import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterDealerComponent } from './register-dealer/register-dealer.component';
import { DealersListComponent } from './dealers-list/dealers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FooterComponent,
    RegisterDealerComponent,
    DealersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
