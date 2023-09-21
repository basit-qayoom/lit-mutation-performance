
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-889`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 889<div>
                <input placeholder="Write here" />
                <button>Button Component 889</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
