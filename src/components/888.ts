
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-888`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 888<div>
                <input placeholder="Write here" />
                <button>Button Component 888</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
