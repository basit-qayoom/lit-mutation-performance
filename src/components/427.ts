
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-427`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 427<div>
                <input placeholder="Write here" />
                <button>Button Component 427</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
