import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[describeTemplate]',
    host: {
    }
})
export class DescribeTemplateDirective {
    
    @Input('describeTemplate') name!: 'text';
    
    constructor(public template: TemplateRef<any>) {}
    
    getType(): string {
        return this.name;
    }
}