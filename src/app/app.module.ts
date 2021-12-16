import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderModule } from './components/header/header.module';
import { PostCardModule } from './components/postcard.module';
import { DetailpostComponent } from './components/detailpost/detailpost.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { DetailpostService } from './detailpost.service';
import { HomePageService } from './homepage.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from 'src/app/login.service';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './register.service';
import { EditpostComponent } from './components/editpost/editpost.component';
import { EditpostService } from './editpost.service';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailpostComponent,
    CommentComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    EditpostComponent,
    SearchComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    HeaderModule,
    PostCardModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DetailpostService,
    HomePageService,
    LoginService,
    RegisterService,
    EditpostService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
