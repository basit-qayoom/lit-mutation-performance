
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-723`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 723<div>
                <input placeholder="Write here" />
                <button>Button Component 723</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
