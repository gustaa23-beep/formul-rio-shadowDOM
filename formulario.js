class FormBuilder extends HTMLElement {     //CRIANDO UMA CLASSE QUE HERDA WEB COMPONENT'S DA CLASSE HTMLElement
        constructor(){
            super()

            this.build() //A CLASSE CHAMA BUILD E JA EXECUTA

         }

    build() {
        const shadow = this.attachShadow({mode: 'open'})   //CRIANDO UMA SHADOW DOM ONDE O CODIGO IRA FICAR ENCAPSULADO

        shadow.appendChild(this.styles())   //LIGANDO O STYLE A SHADOW DOM


        const divs = this.createDiv()
        const forms = this.createForms()   
        const groups = this.createGroups()
        
        forms.appendChild(groups)   //LIGANDO <fieldset> ao <forms>

        shadow.appendChild(divs)    //LIGANDO A DIV AO SHADOW DOM
        shadow.appendChild(forms)
    }

    createDiv() {
        const div1 = document.createElement('div')              //CRIANDO A TAG HMTL <div>
        const title = document.createElement('h1')              //CRIANDO A TAG HMTL <h1>
        const subtitle = document.createElement('p')            //CRIANDO A TAG HMTL <p>
        title.id = "titulo"                                     //CRIANDO UM ID CHAMADO TITULO EM <h1>
        subtitle.id = "subtitulo"                               //CRIANDO UM ID CHAMADO SUBTITULO EM <p>
        div1.appendChild(title)                                 //LIGANDO <h1> a <div>
        div1.appendChild(subtitle)                              //LIGANDO <p> a <div>
        title.innerHTML = "Cadastro de Dev's"                   //NOMEANDO TITULO
        subtitle.innerHTML = "Complete suas informações"        //NOMEANDO SUBTITULO
        return div1
    }

    createForms(){
        const form = document.createElement('form')
        return form
    }

    createGroups(){
        const group = document.createElement('fieldset')
        group.classList.add("grupo")
        return group
    }

    styles() {
        const style = document.createElement('style')       //CRIANDO UM OBJ STYLE QUE TERA ELEMENTOS CSS
        style.textContent = `  
            * {
            margin: 0;
            padding: 0;
            }

            #titulo {
                font-family: sans-serif;
                color: #380B61;
                margin-left: 7%;                            
            }
            #subtitulo {
                font-family: sans-serif;
                color: #380B61;
                margin-left: 10%;
            } 
            
        `
        return style
    }

}

customElements.define('form-builder', FormBuilder)          //DEFININDO A TAG <form-builder> A CLASSE FormBuilder