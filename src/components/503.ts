
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-503`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 503<div>
                <input placeholder="Write here" />
                <button>Button Component 503</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
