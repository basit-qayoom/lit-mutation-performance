
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-107`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 107<div>
                <input placeholder="Write here" />
                <button>Button Component 107</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
