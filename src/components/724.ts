
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-724`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 724<div>
                <input placeholder="Write here" />
                <button>Button Component 724</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
