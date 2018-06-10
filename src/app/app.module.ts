import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingleInputComponent } from './components/single-input/single-input.component';
import { DoubleInputComponent } from './components/double-input/double-input.component';
import { TripleInputComponent } from './components/triple-input/triple-input.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingleInputComponent,
    DoubleInputComponent,
    TripleInputComponent
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
