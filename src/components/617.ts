
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-617`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 617<div>
                <input placeholder="Write here" />
                <button>Button Component 617</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
