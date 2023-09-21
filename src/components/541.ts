
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-541`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 541<div>
                <input placeholder="Write here" />
                <button>Button Component 541</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
