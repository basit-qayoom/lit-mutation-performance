
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-50`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 50<div>
                <input placeholder="Write here" />
                <button>Button Component 50</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
