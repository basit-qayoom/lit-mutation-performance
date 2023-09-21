
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-253`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 253<div>
                <input placeholder="Write here" />
                <button>Button Component 253</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
