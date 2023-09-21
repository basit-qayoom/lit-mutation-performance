
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-726`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 726<div>
                <input placeholder="Write here" />
                <button>Button Component 726</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;