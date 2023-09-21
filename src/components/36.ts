
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-36`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 36<div>
                <input placeholder="Write here" />
                <button>Button Component 36</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
