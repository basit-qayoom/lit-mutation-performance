
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-628`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 628<div>
                <input placeholder="Write here" />
                <button>Button Component 628</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
