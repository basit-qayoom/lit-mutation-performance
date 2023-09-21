
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-926`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 926<div>
                <input placeholder="Write here" />
                <button>Button Component 926</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
