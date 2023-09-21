
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-188`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 188<div>
                <input placeholder="Write here" />
                <button>Button Component 188</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
