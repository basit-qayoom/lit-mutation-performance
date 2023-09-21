
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-825`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 825<div>
                <input placeholder="Write here" />
                <button>Button Component 825</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
