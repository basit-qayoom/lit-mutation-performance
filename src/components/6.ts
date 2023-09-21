
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-6`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 6<div>
                <input placeholder="Write here" />
                <button>Button Component 6</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
