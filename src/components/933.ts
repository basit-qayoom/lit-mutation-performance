
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-933`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 933<div>
                <input placeholder="Write here" />
                <button>Button Component 933</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
