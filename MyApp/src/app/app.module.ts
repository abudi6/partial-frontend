// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to the imports array
    AppRoutingModule,
    FormsModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
