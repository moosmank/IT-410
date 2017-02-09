(function() {
    "use strict";

    const template = `
        <style>
            :host div {
                display: inline-block;
                border-radius: 4px;
                border: 1px solid #999;
                color: #333;
                cursor: pointer;
                padding: 5px 10px;
                user-select: none;
            }
            :host([value]) div {
                border-color: #06A;
                background-color: #39F;
                color: #FFF;
            }
        </style>
        <div>
			<slot>
				<input type="text"> <button >Search</button>
			</slot>
        </div>
    `;

    class SearchButton extends HTMLElement {

        // A getter/setter for value property.
        get value() {
			const search = this.shadowRoot.querySelector('input');
			//if (search.text == null)
			//{
			//	return "";
			//}
            return search.value;
        }

        set value(value) {
            const search = this.shadowRoot.querySelector('input');
			this.setAttribute('value', value);
			search.value = value;
        }
        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
			const self = this;
            this.shadowRoot.querySelector('button').addEventListener('click', function(){
				console.log(self.value);
			});
			this.shadowRoot.querySelector('input').addEventListener('keyup', function(event){
				if (event.which == 13)
				{
					console.log(self.value);
				}
				else
				{
					self.value += event.which;
				}
			});

            this.style.display='none';
            this.offsetHeight;
            this.style.display='inline-block';
        }

    }

    window.customElements.define('search-input', SearchButton);
})();

