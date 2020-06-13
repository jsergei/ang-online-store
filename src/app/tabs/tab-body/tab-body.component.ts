import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-body',
  template: `
    <ng-template>
        <ng-content></ng-content>
    </ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBodyComponent {
    @ViewChild(TemplateRef) public templateRef: TemplateRef<any>;
}
