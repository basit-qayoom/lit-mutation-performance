
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-625`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 625<div>
                <input placeholder="Write here" />
                <button>Button Component 625</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
