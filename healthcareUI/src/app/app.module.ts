import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { RemoveCenterComponent } from './remove-center/remove-center.component';
import { FindAllCenterComponent } from './find-all-center/find-all-center.component';
import { FindCenterComponent } from './find-center/find-center.component';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { AdminService } from './service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddTestComponent } from './add-test/add-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCenterComponent,
    RemoveCenterComponent,
    FindAllCenterComponent,
    FindCenterComponent,
    UpdateCenterComponent,
    HomeComponent,
    AddTestComponent,
    ViewTestsComponent,
    DeleteTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
