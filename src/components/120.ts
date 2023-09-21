
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-120`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 120<div>
                <input placeholder="Write here" />
                <button>Button Component 120</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
