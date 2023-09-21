
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-102`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 102<div>
                <input placeholder="Write here" />
                <button>Button Component 102</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
