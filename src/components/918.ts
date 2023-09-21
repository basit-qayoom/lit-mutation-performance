
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-918`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 918<div>
                <input placeholder="Write here" />
                <button>Button Component 918</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
