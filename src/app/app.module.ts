import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms'
import {NbLayoutModule , NbThemeModule , NbInputModule,NbCardModule, NbButtonModule,NbTabsetModule,NbActionsModule,NbButtonGroupModule,NbIconModule, NbFormFieldModule,} from "@nebular/theme";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {AppRoutingModule} from "./app-routing.module";
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { MovieComponent } from './components/movie/movie.component';
import { OmdbServices } from './services/omdb.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarkComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'movieTheme' }),
    NbLayoutModule,
    AppRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbTabsetModule,
    FormsModule,
    NbActionsModule,
    NbButtonGroupModule,
    NbEvaIconsModule,
    NbIconModule,
    NbFormFieldModule
  ],
  providers: [OmdbServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PageModule { }
