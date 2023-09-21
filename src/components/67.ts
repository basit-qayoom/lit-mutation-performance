
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-67`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 67<div>
                <input placeholder="Write here" />
                <button>Button Component 67</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
