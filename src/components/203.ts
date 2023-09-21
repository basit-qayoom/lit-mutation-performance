
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-203`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 203<div>
                <input placeholder="Write here" />
                <button>Button Component 203</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
