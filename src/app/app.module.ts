import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkitemComponent } from './workitem/workitem.component';
import { WorkitemParentComponent } from './workitem-parent/workitem-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkitemComponent,
    WorkitemParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
