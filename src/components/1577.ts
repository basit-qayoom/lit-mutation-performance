
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1577`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1577<div>
                <input placeholder="Write here" />
                <button>Button Component 1577</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
