
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1655`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1655<div>
                <input placeholder="Write here" />
                <button>Button Component 1655</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
