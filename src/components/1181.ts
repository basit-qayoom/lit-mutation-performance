
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1181`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1181<div>
                <input placeholder="Write here" />
                <button>Button Component 1181</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
