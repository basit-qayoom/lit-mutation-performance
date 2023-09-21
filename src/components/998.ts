
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-998`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 998<div>
                <input placeholder="Write here" />
                <button>Button Component 998</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
