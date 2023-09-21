
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-52`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 52<div>
                <input placeholder="Write here" />
                <button>Button Component 52</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
