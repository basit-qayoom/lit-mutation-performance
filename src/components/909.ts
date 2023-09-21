
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-909`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 909<div>
                <input placeholder="Write here" />
                <button>Button Component 909</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
