
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-613`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 613<div>
                <input placeholder="Write here" />
                <button>Button Component 613</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
