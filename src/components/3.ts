
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-3`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 3<div>
                <input placeholder="Write here" />
                <button>Button Component 3</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
