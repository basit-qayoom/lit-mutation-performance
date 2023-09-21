
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-170`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 170<div>
                <input placeholder="Write here" />
                <button>Button Component 170</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
