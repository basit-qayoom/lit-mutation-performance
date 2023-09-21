
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-331`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 331<div>
                <input placeholder="Write here" />
                <button>Button Component 331</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
