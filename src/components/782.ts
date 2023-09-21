
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-782`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 782<div>
                <input placeholder="Write here" />
                <button>Button Component 782</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
