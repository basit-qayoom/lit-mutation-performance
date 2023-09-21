
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-611`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 611<div>
                <input placeholder="Write here" />
                <button>Button Component 611</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
