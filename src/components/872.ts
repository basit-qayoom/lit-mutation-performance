
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-872`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 872<div>
                <input placeholder="Write here" />
                <button>Button Component 872</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
