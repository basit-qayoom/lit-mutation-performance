
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-784`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 784<div>
                <input placeholder="Write here" />
                <button>Button Component 784</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
