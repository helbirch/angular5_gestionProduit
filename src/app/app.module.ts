import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule, appRoutes } from './app.routing.module';
import { RouterModule } from '@angular/router';
import {ProduitService} from './produit/produit.service';
import { ProduitResolver } from './produit/produit.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProduitMockService,
    ProduitService,
    ProduitResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 