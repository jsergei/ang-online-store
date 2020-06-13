import { Component, ChangeDetectorRef } from '@angular/core';

import { Product } from './interfaces/product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    showNumber = false;
    showText = false;
    headerShown = false;

    products: Product[] = [];
    private lastId = 0;

    constructor(private cd: ChangeDetectorRef) {}

    onProductCreated(p: Product): void {
        this.products = [
            ...this.products,
            {
                ...p,
                id: this.lastId++
            }
        ];
    }

    onProductDeleted(id: number): void {
        this.products = this.products.filter(p => p.id !== id);
    }

    flipNumber(): void {
        this.showNumber != this.showNumber;
    }

    flipText(): void {
        this.showText != this.showText;
    }

    headerTurnOn(): void {
        this.headerShown = true;
    }

    detectChanges(): void {
        this.cd.detectChanges();
    }
}
