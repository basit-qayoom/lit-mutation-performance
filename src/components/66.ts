
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-66`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 66<div>
                <input placeholder="Write here" />
                <button>Button Component 66</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
