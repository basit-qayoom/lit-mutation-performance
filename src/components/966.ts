
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-966`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 966<div>
                <input placeholder="Write here" />
                <button>Button Component 966</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
