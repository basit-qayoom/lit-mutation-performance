
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-580`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 580<div>
                <input placeholder="Write here" />
                <button>Button Component 580</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
