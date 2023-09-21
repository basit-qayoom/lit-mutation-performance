
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-714`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 714<div>
                <input placeholder="Write here" />
                <button>Button Component 714</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
