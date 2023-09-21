
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-108`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 108<div>
                <input placeholder="Write here" />
                <button>Button Component 108</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
