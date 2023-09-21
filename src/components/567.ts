
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-567`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 567<div>
                <input placeholder="Write here" />
                <button>Button Component 567</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
