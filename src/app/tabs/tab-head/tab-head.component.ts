import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-head',
  template: `
    <ng-template>
        <ng-content></ng-content>
    </ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeadComponent {
    @ViewChild(TemplateRef) public templateRef: TemplateRef<any>;
}
