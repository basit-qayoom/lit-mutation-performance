
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-161`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 161<div>
                <input placeholder="Write here" />
                <button>Button Component 161</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
