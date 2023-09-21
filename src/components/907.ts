
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-907`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 907<div>
                <input placeholder="Write here" />
                <button>Button Component 907</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
