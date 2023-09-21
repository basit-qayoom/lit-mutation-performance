
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-29`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 29<div>
                <input placeholder="Write here" />
                <button>Button Component 29</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
