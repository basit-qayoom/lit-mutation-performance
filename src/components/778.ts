
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-778`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 778<div>
                <input placeholder="Write here" />
                <button>Button Component 778</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
