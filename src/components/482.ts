
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-482`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 482<div>
                <input placeholder="Write here" />
                <button>Button Component 482</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
