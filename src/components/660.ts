
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-660`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 660<div>
                <input placeholder="Write here" />
                <button>Button Component 660</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
