
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-40`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 40<div>
                <input placeholder="Write here" />
                <button>Button Component 40</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
