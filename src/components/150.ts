
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-150`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 150<div>
                <input placeholder="Write here" />
                <button>Button Component 150</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
