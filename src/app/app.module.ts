import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NgxParallaxScrollModule } from "@boatzako/ngx-parallax-scroll";

@NgModule({
  imports: [BrowserModule, NgxParallaxScrollModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
