
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';
import '../../dumbs/sk-button';

@customElement('sk-app')
export default class SkApp extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property({type: String}) 
  name: string = "";

  @property({attribute: false})
  readonly APP_VERSION: string = <string> process.env.appVersion;

  @property({attribute: false})
  readonly ENV: string = <string> process.env.NODE_ENV;

  @property({attribute: false})
  updateReady: boolean = false;

  protected render() {
    return html`<h1>${this.title}</h1> ${template(this)}`;
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