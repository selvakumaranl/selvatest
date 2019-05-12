import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelvatestSharedLibsModule, SelvatestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SelvatestSharedLibsModule, SelvatestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SelvatestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelvatestSharedModule {
  static forRoot() {
    return {
      ngModule: SelvatestSharedModule
    };
  }
}
