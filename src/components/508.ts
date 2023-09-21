
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-508`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 508<div>
                <input placeholder="Write here" />
                <button>Button Component 508</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
