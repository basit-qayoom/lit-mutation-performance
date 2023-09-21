
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-762`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 762<div>
                <input placeholder="Write here" />
                <button>Button Component 762</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
