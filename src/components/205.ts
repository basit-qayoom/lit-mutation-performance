
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-205`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 205<div>
                <input placeholder="Write here" />
                <button>Button Component 205</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
