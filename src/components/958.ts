
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-958`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 958<div>
                <input placeholder="Write here" />
                <button>Button Component 958</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
