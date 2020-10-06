import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCenterComponent } from './add-center/add-center.component';
import { FindCenterComponent } from './find-center/find-center.component';
import { RemoveCenterComponent } from './remove-center/remove-center.component';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { FindAllCenterComponent } from './find-all-center/find-all-center.component';
import { HomeComponent } from './home/home.component';
import { AddTestComponent } from './add-test/add-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';

const routes: Routes = [
{path:"add",component:AddCenterComponent},
{path:"get",component:FindCenterComponent},
{path:"delete",component:RemoveCenterComponent},
{path:"modify",component:UpdateCenterComponent},
{path:"",component:FindAllCenterComponent},
{path:"home",component:HomeComponent},
{path:"addTest",component:AddTestComponent},
{path:"getTest",component:ViewTestsComponent},
{path:"deleteTest",component:DeleteTestComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
