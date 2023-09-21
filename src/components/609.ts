
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-609`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 609<div>
                <input placeholder="Write here" />
                <button>Button Component 609</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
