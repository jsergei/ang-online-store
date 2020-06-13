import { Component, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
    selector: 'create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent {
    @ViewChild('name') nameEl: ElementRef;
    @ViewChild('description') descriptionEl: ElementRef;

    @Output() createProduct = new EventEmitter<Product>();

    create(name: string, description: string): void {
        this.nameEl.nativeElement.value = '';
        this.descriptionEl.nativeElement.value = '';

        this.createProduct.emit({
            name,
            description
        });        
    }
}
