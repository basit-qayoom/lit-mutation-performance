
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-643`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 643<div>
                <input placeholder="Write here" />
                <button>Button Component 643</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
