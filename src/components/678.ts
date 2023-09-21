
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-678`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 678<div>
                <input placeholder="Write here" />
                <button>Button Component 678</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
