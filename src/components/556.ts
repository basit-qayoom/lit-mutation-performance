
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-556`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 556<div>
                <input placeholder="Write here" />
                <button>Button Component 556</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
