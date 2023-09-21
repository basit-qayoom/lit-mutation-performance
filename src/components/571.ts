
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-571`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 571<div>
                <input placeholder="Write here" />
                <button>Button Component 571</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
