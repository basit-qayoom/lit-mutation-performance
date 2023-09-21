
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-409`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 409<div>
                <input placeholder="Write here" />
                <button>Button Component 409</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
