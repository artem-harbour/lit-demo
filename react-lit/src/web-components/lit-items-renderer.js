import { html, LitElement } from 'lit';

export class ItemsRenderer extends LitElement {
  static properties = {
    items: {
      type: Array,
      converter: (attrValue) => {
        if (typeof attrValue === 'string') {
          return JSON.parse(attrValue);
        }
      },
    },
    newItem: {
      type: String,
    },
  };

  constructor() {
    super();
    this.items = [];
    this.newItem = '';
  }

  _onInput(event) {
    const value = event.target.value;
    this.newItem = value;
  }

  _addItem() {
    if (!this.newItem) return;
    this.items = [...this.items, this.newItem];
    this._itemsChanged();
  }

  _itemsChanged() {
    const detail = { items: this.items };
    const event = new CustomEvent('items-changed', {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div>
        <input type="text" @input=${this._onInput}>
        <button @click=${this._addItem}>Add from Lit</button>
      </div>

      <h3>Render items:</h3>
      <ul>
        ${this.items.map((item, index) => (
          html`<li>${index}: ${item}</li>`
        ))}
      </ul>
    `;
  }
}
customElements.define('lit-items-renderer', ItemsRenderer);
