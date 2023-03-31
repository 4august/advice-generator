class Content{
    constructor(advice){
        this.advice = advice;
    }

    template(){
        return `
        <h4>advice #${this.advice.id}</h4>
        <p>${this.advice.conteudo}</p>
        `
    }
}