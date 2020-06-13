import { Component, ChangeDetectionStrategy, ViewChild, ViewContainerRef, QueryList, ContentChildren, Input } from '@angular/core';
import { TabDirective } from '../tab/tab.directive';

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContainerComponent {
    @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;
    @ViewChild('bodyTarget', {read: ViewContainerRef}) bodyPlaceholder: ViewContainerRef;

    @Input() headerShown = false;

    activeTabIndex = 0;

    setActive(index: number): void {
        if (index !== this.activeTabIndex) {
            this.activeTabIndex = index;
            this._setTabBodyByIndex(index);
        }
    }

    ngAfterViewInit() {
        this._setTabBodyByIndex(this.activeTabIndex);
    }

    private _setTabBodyByIndex(index: number): void {
        let tab: TabDirective = null;
        let consumed = 0;
        for (let t of this.tabs) {
            if (consumed++ === index) {
                tab = t;
            }
        }
        if (!tab) {
            throw new Error('Selected tab does not exist');
        }
        this.bodyPlaceholder.clear();
        this.bodyPlaceholder.createEmbeddedView(tab.bodyTemplate);
    }
}
