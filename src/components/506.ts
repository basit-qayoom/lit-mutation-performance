
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-506`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 506<div>
                <input placeholder="Write here" />
                <button>Button Component 506</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
