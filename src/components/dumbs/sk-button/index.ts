
import {LitElement, html, customElement, unsafeCSS} from 'lit-element';

import template from './template';

@customElement('sk-button')
export default class SkButton extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  protected render() {
    return html`${template(this)}`;
  }
}