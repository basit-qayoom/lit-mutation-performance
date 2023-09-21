
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1913`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1913<div>
                <input placeholder="Write here" />
                <button>Button Component 1913</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
