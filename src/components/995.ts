
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-995`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 995<div>
                <input placeholder="Write here" />
                <button>Button Component 995</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
