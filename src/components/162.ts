
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-162`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 162<div>
                <input placeholder="Write here" />
                <button>Button Component 162</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
