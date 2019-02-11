
import { LitElement, html } from 'lit-element';

import css from './style.pcss';
import template from './template';
import '../../dumbs/sk-button';

export default class SkApp extends LitElement {
  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      },
      updateReady: {
        type: Boolean,
        value: false
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  render() {
    return html`<style>${css}</style> ${template(this)}`;
  }

  constructor() {
    super();

    document.addEventListener('updateReady', () => {
      this.updateReady = true;
    });
  }

  startTour() {
    window.location.replace('https://github.com/PolymerX/polymer-skeleton');
  }

  reload() {
    window.location.reload();
  }
}

window.customElements.define('sk-app', SkApp);
