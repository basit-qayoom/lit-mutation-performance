
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-330`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 330<div>
                <input placeholder="Write here" />
                <button>Button Component 330</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
