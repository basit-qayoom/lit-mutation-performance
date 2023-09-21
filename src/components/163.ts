
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-163`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 163<div>
                <input placeholder="Write here" />
                <button>Button Component 163</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
