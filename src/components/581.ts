
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-581`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 581<div>
                <input placeholder="Write here" />
                <button>Button Component 581</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
