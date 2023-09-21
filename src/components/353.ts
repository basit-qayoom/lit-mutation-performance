
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-353`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 353<div>
                <input placeholder="Write here" />
                <button>Button Component 353</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
