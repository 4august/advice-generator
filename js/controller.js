class Controller {
    constructor() {
        this.conteudo = document.querySelector(".advice");
        this.novaMensagem();
        document.querySelector("#container button").addEventListener("click", () => this.novaMensagem());
    }

    novaMensagem() {
        fetch("https://api.adviceslip.com/advice").then((response) => {
            response.json().then((json) =>
                this.conteudo.innerHTML = new Content(new Advice(json.slip.id, json.slip.advice)).template()
            );
        }).catch((error) => console.log("foi de vasco", error)
        );
    }
}
let controller = new Controller();