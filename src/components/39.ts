
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-39`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 39<div>
                <input placeholder="Write here" />
                <button>Button Component 39</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
