
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-386`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 386<div>
                <input placeholder="Write here" />
                <button>Button Component 386</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
