
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-325`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 325<div>
                <input placeholder="Write here" />
                <button>Button Component 325</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
