
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1845`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1845<div>
                <input placeholder="Write here" />
                <button>Button Component 1845</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
