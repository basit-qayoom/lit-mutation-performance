
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-555`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 555<div>
                <input placeholder="Write here" />
                <button>Button Component 555</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
