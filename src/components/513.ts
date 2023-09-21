
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-513`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 513<div>
                <input placeholder="Write here" />
                <button>Button Component 513</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
