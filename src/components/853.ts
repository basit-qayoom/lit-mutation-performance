
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-853`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 853<div>
                <input placeholder="Write here" />
                <button>Button Component 853</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
