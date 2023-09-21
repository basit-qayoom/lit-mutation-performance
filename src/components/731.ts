
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-731`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 731<div>
                <input placeholder="Write here" />
                <button>Button Component 731</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
