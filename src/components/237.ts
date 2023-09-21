
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-237`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 237<div>
                <input placeholder="Write here" />
                <button>Button Component 237</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
