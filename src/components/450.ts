
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-450`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 450<div>
                <input placeholder="Write here" />
                <button>Button Component 450</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
