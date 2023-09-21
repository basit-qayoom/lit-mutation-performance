
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-402`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 402<div>
                <input placeholder="Write here" />
                <button>Button Component 402</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
