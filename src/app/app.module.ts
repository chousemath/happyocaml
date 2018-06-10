import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AreaCircleComponent } from './components/area-circle/area-circle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AreaCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxGistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
