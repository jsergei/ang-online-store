import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { CommonModule } from '@angular/common';
import { TabContainerComponent } from './tabs/tab-container/tab-container.component';
import { TabDirective } from './tabs/tab/tab.directive';
import { TabBodyComponent } from './tabs/tab-body/tab-body.component';
import { TabHeadComponent } from './tabs/tab-head/tab-head.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateProductComponent,
        ProductGalleryComponent,
        TabDirective,
        TabHeadComponent,
        TabBodyComponent,
        TabContainerComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
