
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-550`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 550<div>
                <input placeholder="Write here" />
                <button>Button Component 550</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
