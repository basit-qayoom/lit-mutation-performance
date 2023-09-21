
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-96`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 96<div>
                <input placeholder="Write here" />
                <button>Button Component 96</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
