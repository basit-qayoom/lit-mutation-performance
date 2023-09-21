
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-845`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 845<div>
                <input placeholder="Write here" />
                <button>Button Component 845</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
