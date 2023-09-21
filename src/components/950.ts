
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-950`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 950<div>
                <input placeholder="Write here" />
                <button>Button Component 950</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
