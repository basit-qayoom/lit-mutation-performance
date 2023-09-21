
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1492`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1492<div>
                <input placeholder="Write here" />
                <button>Button Component 1492</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
