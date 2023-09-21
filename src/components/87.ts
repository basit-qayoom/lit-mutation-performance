
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-87`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 87<div>
                <input placeholder="Write here" />
                <button>Button Component 87</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
