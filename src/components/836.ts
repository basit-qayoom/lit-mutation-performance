
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-836`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 836<div>
                <input placeholder="Write here" />
                <button>Button Component 836</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
