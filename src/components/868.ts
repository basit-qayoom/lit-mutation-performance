
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-868`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 868<div>
                <input placeholder="Write here" />
                <button>Button Component 868</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
