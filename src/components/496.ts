
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-496`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 496<div>
                <input placeholder="Write here" />
                <button>Button Component 496</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
