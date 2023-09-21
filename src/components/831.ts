
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-831`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 831<div>
                <input placeholder="Write here" />
                <button>Button Component 831</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
