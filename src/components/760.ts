
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-760`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 760<div>
                <input placeholder="Write here" />
                <button>Button Component 760</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
