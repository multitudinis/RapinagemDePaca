import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
