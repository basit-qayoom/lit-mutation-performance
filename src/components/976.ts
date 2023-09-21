
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-976`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 976<div>
                <input placeholder="Write here" />
                <button>Button Component 976</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
