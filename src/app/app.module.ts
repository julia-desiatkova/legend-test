import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './status/status.component';
import { DescribeComponent } from './describe/describe.component';
import { DescribeTemplateDirective } from './describe/describe.directive';
import { SkillComponent } from './skill/skill.component';
import { SkillTemplateDirective } from './skill/skill.directive';
import { ProgressComponent } from './progress/progress.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    App, 
    HeaderComponent,
    StatusComponent,
    DescribeComponent,
    DescribeTemplateDirective,
    SkillComponent,
    SkillTemplateDirective,
    ProgressComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
