
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-415`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 415<div>
                <input placeholder="Write here" />
                <button>Button Component 415</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
