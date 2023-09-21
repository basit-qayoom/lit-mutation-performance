
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-721`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 721<div>
                <input placeholder="Write here" />
                <button>Button Component 721</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
