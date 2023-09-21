
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-43`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 43<div>
                <input placeholder="Write here" />
                <button>Button Component 43</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
