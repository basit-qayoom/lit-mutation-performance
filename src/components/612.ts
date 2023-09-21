
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-612`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 612<div>
                <input placeholder="Write here" />
                <button>Button Component 612</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
