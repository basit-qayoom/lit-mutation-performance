
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-582`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 582<div>
                <input placeholder="Write here" />
                <button>Button Component 582</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
