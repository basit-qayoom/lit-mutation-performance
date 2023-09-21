
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-530`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 530<div>
                <input placeholder="Write here" />
                <button>Button Component 530</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
