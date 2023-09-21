
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-962`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 962<div>
                <input placeholder="Write here" />
                <button>Button Component 962</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
