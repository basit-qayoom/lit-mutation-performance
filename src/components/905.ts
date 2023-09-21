
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-905`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 905<div>
                <input placeholder="Write here" />
                <button>Button Component 905</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
