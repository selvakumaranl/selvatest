import { NgModule } from '@angular/core';

import { SelvatestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SelvatestSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SelvatestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SelvatestSharedCommonModule {}
