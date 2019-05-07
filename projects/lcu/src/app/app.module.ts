import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FathymSharedModule } from '@lcu-ide/common';
import {
  SignInComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  LcuIdentityModule,
  IdentityConfigManagerElementComponent,
  SELECTOR_IDENTITY_CONFIG_MANAGER_ELEMENT
} from '@lcu-ide/lcu-identity-common';

@NgModule({
  declarations: [],
  imports: [FathymSharedModule, LcuIdentityModule],
  exports: [LcuIdentityModule]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const signIn = createCustomElement(SignInComponent, { injector: this.injector });

    customElements.define('lcu-sign-in', signIn);

    const register = createCustomElement(RegisterComponent, { injector: this.injector });

    customElements.define('lcu-register', register);

    const forgotPassword = createCustomElement(ForgotPasswordComponent, { injector: this.injector });

    customElements.define('lcu-forgot-password', forgotPassword);

    const idCfgMgr = createCustomElement(IdentityConfigManagerElementComponent, { injector: this.injector });

    customElements.define(SELECTOR_IDENTITY_CONFIG_MANAGER_ELEMENT, idCfgMgr);
  }
}
