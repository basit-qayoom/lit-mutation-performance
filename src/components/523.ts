
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-523`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 523<div>
                <input placeholder="Write here" />
                <button>Button Component 523</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
