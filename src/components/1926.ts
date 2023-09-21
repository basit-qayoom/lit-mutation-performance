
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1926`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1926<div>
                <input placeholder="Write here" />
                <button>Button Component 1926</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
