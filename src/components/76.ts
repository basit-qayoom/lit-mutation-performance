
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-76`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 76<div>
                <input placeholder="Write here" />
                <button>Button Component 76</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
