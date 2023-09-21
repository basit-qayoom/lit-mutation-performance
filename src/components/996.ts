
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-996`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 996<div>
                <input placeholder="Write here" />
                <button>Button Component 996</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
