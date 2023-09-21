
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-502`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 502<div>
                <input placeholder="Write here" />
                <button>Button Component 502</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
