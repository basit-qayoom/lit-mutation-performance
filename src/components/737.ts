
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-737`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 737<div>
                <input placeholder="Write here" />
                <button>Button Component 737</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
