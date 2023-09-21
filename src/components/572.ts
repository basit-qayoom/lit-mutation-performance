
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-572`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 572<div>
                <input placeholder="Write here" />
                <button>Button Component 572</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
