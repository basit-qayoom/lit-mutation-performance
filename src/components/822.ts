
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-822`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 822<div>
                <input placeholder="Write here" />
                <button>Button Component 822</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
