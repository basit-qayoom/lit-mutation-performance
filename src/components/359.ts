
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-359`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 359<div>
                <input placeholder="Write here" />
                <button>Button Component 359</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
