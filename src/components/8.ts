
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-8`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 8<div>
                <input placeholder="Write here" />
                <button>Button Component 8</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
