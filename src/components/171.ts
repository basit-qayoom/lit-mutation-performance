
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-171`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 171<div>
                <input placeholder="Write here" />
                <button>Button Component 171</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
