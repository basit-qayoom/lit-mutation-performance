
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1025`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1025<div>
                <input placeholder="Write here" />
                <button>Button Component 1025</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
