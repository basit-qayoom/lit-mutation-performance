
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-355`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 355<div>
                <input placeholder="Write here" />
                <button>Button Component 355</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
