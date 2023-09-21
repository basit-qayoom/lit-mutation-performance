
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-771`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 771<div>
                <input placeholder="Write here" />
                <button>Button Component 771</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
