
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-499`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 499<div>
                <input placeholder="Write here" />
                <button>Button Component 499</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
