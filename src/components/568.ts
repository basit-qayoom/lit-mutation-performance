
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-568`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 568<div>
                <input placeholder="Write here" />
                <button>Button Component 568</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
