
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-143`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 143<div>
                <input placeholder="Write here" />
                <button>Button Component 143</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
