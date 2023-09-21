
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-686`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 686<div>
                <input placeholder="Write here" />
                <button>Button Component 686</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
