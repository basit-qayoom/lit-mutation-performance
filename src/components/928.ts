
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-928`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 928<div>
                <input placeholder="Write here" />
                <button>Button Component 928</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
