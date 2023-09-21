
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-851`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 851<div>
                <input placeholder="Write here" />
                <button>Button Component 851</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
