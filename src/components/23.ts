
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-23`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 23<div>
                <input placeholder="Write here" />
                <button>Button Component 23</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
