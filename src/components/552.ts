
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-552`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 552<div>
                <input placeholder="Write here" />
                <button>Button Component 552</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
