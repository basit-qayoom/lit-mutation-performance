
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-272`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 272<div>
                <input placeholder="Write here" />
                <button>Button Component 272</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
