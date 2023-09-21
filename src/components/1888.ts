
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1888`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1888<div>
                <input placeholder="Write here" />
                <button>Button Component 1888</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
