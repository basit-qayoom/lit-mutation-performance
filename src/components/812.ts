
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-812`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 812<div>
                <input placeholder="Write here" />
                <button>Button Component 812</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
