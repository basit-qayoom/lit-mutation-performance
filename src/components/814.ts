
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-814`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 814<div>
                <input placeholder="Write here" />
                <button>Button Component 814</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
