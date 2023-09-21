
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-384`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 384<div>
                <input placeholder="Write here" />
                <button>Button Component 384</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
