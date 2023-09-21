
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-785`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 785<div>
                <input placeholder="Write here" />
                <button>Button Component 785</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
