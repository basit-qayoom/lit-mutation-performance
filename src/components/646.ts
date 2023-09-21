
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-646`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 646<div>
                <input placeholder="Write here" />
                <button>Button Component 646</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
