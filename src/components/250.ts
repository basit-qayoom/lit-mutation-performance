
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-250`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 250<div>
                <input placeholder="Write here" />
                <button>Button Component 250</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
