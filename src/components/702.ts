
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-702`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 702<div>
                <input placeholder="Write here" />
                <button>Button Component 702</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
