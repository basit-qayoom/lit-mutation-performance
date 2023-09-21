
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-315`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 315<div>
                <input placeholder="Write here" />
                <button>Button Component 315</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
