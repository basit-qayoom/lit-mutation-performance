
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-364`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 364<div>
                <input placeholder="Write here" />
                <button>Button Component 364</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
