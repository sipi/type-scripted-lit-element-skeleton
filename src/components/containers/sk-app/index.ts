
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';
import '../../dumbs/sk-button';

@customElement('sk-app')
export default class SkApp extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property()
  private name: String = "";

  @property()
  private appVersion: String = <String> process.env.appVersion;

  @property()
  private ENV: String = <String> process.env.NODE_ENV;

  @property()
  private updateReady: Boolean = false;

  protected render() {
    return html`${template(this)}`;
  }

  constructor() {
    super();

    document.addEventListener('updateReady', () => {
      this.updateReady = true;
    });
  }

  private startTour() {
      window.location.replace("https://github.com/sipi/lit-element-skeleton");
  }

  private reload() {
    window.location.reload();
  }
}