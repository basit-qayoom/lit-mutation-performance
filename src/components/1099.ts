
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1099`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1099<div>
                <input placeholder="Write here" />
                <button>Button Component 1099</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
