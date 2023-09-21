
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-768`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 768<div>
                <input placeholder="Write here" />
                <button>Button Component 768</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
