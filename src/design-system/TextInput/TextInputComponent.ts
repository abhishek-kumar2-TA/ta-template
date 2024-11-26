import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import textInputStyles from './TextInput.css';

@customElement('custom-text-input')
export class TextInputComponent extends LitElement {
  @property({ type: String }) type: 'text' | 'password' = 'text';
  @property({ type: String }) value = '';
  @property({ type: String }) id = '';
  @property({ type: String }) label = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Function }) onChangeHandler?: (value: string) => void;

  static styles = textInputStyles;

  private _inputChangeHandler = (event: Event) => {
    event.preventDefault();
    if (this.onChangeHandler) {
      const inputTarget = event.target as HTMLInputElement;
      this.onChangeHandler(inputTarget.value);
    }
  };

  render() {
    return html`
      <div class="field-wrapper">
        <label htmlFor="${this.id}">${this.label}</label>
        <input
          id="${this.id}"
          .type="${this.type}"
          .value="${this.value}"
          @input="${this._inputChangeHandler}"
          ?disabled="${this.disabled}" />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-text-input': TextInputComponent;
  }
}
