
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1098`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1098<div>
                <input placeholder="Write here" />
                <button>Button Component 1098</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
