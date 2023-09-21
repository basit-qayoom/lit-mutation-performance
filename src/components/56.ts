
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-56`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 56<div>
                <input placeholder="Write here" />
                <button>Button Component 56</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
