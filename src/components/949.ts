
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-949`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 949<div>
                <input placeholder="Write here" />
                <button>Button Component 949</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
