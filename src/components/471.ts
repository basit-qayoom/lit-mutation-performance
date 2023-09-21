
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-471`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 471<div>
                <input placeholder="Write here" />
                <button>Button Component 471</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
