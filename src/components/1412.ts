
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1412`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1412<div>
                <input placeholder="Write here" />
                <button>Button Component 1412</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
