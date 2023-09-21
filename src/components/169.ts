
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-169`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 169<div>
                <input placeholder="Write here" />
                <button>Button Component 169</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
