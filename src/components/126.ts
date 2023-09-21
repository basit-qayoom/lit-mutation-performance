
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-126`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 126<div>
                <input placeholder="Write here" />
                <button>Button Component 126</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
