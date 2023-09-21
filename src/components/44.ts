
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-44`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 44<div>
                <input placeholder="Write here" />
                <button>Button Component 44</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
