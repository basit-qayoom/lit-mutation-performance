
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-70`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 70<div>
                <input placeholder="Write here" />
                <button>Button Component 70</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
