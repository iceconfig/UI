import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./home/home.component";
@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [HomeComponent],
    entryComponents: [],
    bootstrap: [HomeComponent]
})
export class AppModule {

}