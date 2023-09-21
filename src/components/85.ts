
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-85`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 85<div>
                <input placeholder="Write here" />
                <button>Button Component 85</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
