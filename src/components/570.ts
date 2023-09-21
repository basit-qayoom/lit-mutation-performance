
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-570`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 570<div>
                <input placeholder="Write here" />
                <button>Button Component 570</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
