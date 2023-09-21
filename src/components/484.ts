
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-484`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 484<div>
                <input placeholder="Write here" />
                <button>Button Component 484</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
