
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-877`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 877<div>
                <input placeholder="Write here" />
                <button>Button Component 877</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
