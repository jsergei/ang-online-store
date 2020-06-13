import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGalleryComponent {
    @Input() products: Product[] = [];
    @Output() deleteProduct = new EventEmitter<number>();

    delete(id: number): void {
        this.deleteProduct.emit(id);
    }
}
