
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-193`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 193<div>
                <input placeholder="Write here" />
                <button>Button Component 193</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
