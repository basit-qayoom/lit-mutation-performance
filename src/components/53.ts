
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-53`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 53<div>
                <input placeholder="Write here" />
                <button>Button Component 53</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
