
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-906`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 906<div>
                <input placeholder="Write here" />
                <button>Button Component 906</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
