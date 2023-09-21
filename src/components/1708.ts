
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1708`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1708<div>
                <input placeholder="Write here" />
                <button>Button Component 1708</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
