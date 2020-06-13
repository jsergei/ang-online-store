import { Directive, ContentChild, TemplateRef } from '@angular/core';
import { TabHeadComponent } from '../tab-head/tab-head.component';
import { TabBodyComponent } from '../tab-body/tab-body.component';

@Directive({
  selector: 'tab'
})
export class TabDirective {
    @ContentChild(TabHeadComponent) headCmp: TabHeadComponent;
    @ContentChild(TabBodyComponent) bodyCmp: TabBodyComponent;

    get headTemplate(): TemplateRef<any> {
        return this.headCmp.templateRef;
    }

    get bodyTemplate(): TemplateRef<any> {
        return this.bodyCmp.templateRef;
    }
}
