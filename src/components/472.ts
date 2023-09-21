
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-472`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 472<div>
                <input placeholder="Write here" />
                <button>Button Component 472</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
