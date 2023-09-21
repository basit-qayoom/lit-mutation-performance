
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-403`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 403<div>
                <input placeholder="Write here" />
                <button>Button Component 403</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
