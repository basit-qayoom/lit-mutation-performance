
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-99`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 99<div>
                <input placeholder="Write here" />
                <button>Button Component 99</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
