
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-999`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 999<div>
                <input placeholder="Write here" />
                <button>Button Component 999</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
