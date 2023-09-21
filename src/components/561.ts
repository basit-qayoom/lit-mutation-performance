
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-561`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 561<div>
                <input placeholder="Write here" />
                <button>Button Component 561</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
