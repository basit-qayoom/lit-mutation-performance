
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-984`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 984<div>
                <input placeholder="Write here" />
                <button>Button Component 984</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
