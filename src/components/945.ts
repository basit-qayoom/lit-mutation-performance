
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-945`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 945<div>
                <input placeholder="Write here" />
                <button>Button Component 945</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
