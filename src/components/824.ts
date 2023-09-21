
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-824`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 824<div>
                <input placeholder="Write here" />
                <button>Button Component 824</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
