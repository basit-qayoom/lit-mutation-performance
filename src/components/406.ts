
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-406`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 406<div>
                <input placeholder="Write here" />
                <button>Button Component 406</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
