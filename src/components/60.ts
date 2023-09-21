
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-60`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 60<div>
                <input placeholder="Write here" />
                <button>Button Component 60</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
