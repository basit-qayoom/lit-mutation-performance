
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-790`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 790<div>
                <input placeholder="Write here" />
                <button>Button Component 790</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
