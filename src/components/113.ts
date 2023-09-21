
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-113`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 113<div>
                <input placeholder="Write here" />
                <button>Button Component 113</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
