
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-81`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 81<div>
                <input placeholder="Write here" />
                <button>Button Component 81</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
