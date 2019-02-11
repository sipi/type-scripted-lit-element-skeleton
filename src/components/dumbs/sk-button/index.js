
import {LitElement, html} from 'lit-element';

import css from './style.pcss';
import template from './template';

export default class SkButton extends LitElement {
  render() {
    return html`<style>${css}</style> ${template(this)}`;
  }
}

window.customElements.define('sk-button', SkButton);
