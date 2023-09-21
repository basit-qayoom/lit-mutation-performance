
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-37`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 37<div>
                <input placeholder="Write here" />
                <button>Button Component 37</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
