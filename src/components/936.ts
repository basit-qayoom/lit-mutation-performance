
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-936`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 936<div>
                <input placeholder="Write here" />
                <button>Button Component 936</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
