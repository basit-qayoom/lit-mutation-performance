
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-514`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 514<div>
                <input placeholder="Write here" />
                <button>Button Component 514</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
