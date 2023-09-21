
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-11`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 11<div>
                <input placeholder="Write here" />
                <button>Button Component 11</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
