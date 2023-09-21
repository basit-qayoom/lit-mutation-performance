
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-111`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 111<div>
                <input placeholder="Write here" />
                <button>Button Component 111</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
