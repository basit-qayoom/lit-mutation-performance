
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-931`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 931<div>
                <input placeholder="Write here" />
                <button>Button Component 931</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
