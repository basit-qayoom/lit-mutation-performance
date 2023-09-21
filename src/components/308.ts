
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-308`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 308<div>
                <input placeholder="Write here" />
                <button>Button Component 308</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
