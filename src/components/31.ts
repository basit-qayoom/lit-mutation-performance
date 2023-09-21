
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-31`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 31<div>
                <input placeholder="Write here" />
                <button>Button Component 31</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
