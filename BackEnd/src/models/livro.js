class Livro {
    
    constructor(i){
        this.id = i.id
        this.titulo = i.titulo
        this.autor = i.autor
        this.valor = i.valor
        this.dataEmprest = i.dataEmprest
        this.dataPrevdev = i.dataPrevdev
        this.dataDev = i.dataDev
    }

    create(){
        return `INSERT INTO emprestimo VALUE('${this.id}','${this.titulo}','${this.autor}','${this.valor}','${this.dataEmprest}','${this.dataPrevdev}','${this.dataDev}')`
    }

    read(){
        if( this.id == undefined)
            return `SELECT * FROM emprestimo`
        else 
            return `SELECT * FROM emprestimo WHERE id = '${this.id}'`
    }

    update(id){
        return `UPDATE emprestimo SET titulo = '${this.titulo}', autor = '${this.autor}', valor = '${this.valor}', 
        dataEmprest = '${this.dataEmprest}', dataPrevdev = '${this.dataPrevdev}', dataDev = '${this.dataDev}' WHERE id = '${id}'`
    }

    delete() {
        return `DELETE FROM emprestimo WHERE id = '${this.id}'`
    }

}

module.exports = Livro