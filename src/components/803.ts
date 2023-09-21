
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-803`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 803<div>
                <input placeholder="Write here" />
                <button>Button Component 803</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
