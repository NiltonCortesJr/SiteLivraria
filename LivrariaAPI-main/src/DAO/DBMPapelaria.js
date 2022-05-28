import Database from "../infra/Database.js"

class DBMPapelaria{
    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON"
        Database.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras Papelaria configuradas.")
            }
        })
    }
    static createTable(){

        this.activePragma()

        const tabela_papelaria = `
        CREATE TABLE IF NOT EXISTS papelaria (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            produto VARCHAR,
            marca VARCHAR,
            caracteristicas VARCHAR,
            valor FLOAT
        )
        `

        return new Promise ((resolve, reject) => {
            Database.run(tabela_papelaria, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Produtos inseridos com sucesso!")
                }
            })
        })
    }

    /**
     * 
     * @param {Object} item 
     * @returns Promise<Object>
     */
    static popular(item) {
        const query = `INSERT INTO papelaria VALUES (?, ?, ?, ?, ?)`
        const body = Object.values(item)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "Item(ns) criado(s) com sucesso" }) 
                }
            })
        })
    }
    static listarTodos(){
        const query = "SELECT * FROM papelaria"
        return new Promise ((resolve, reject) => {
            Database.all(query, (e, rows)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({rows:rows})
                }
            })
        })
    }
    static listaPorId(id){
        const query = "SELECT * FROM papelaria WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.get(query, id, (e, result)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            } )
        })
    }
    static atualizaPorId(Papelaria, id){
        const query = `
        UPDATE papelaria SET (id, produto, marca, caracteristicas, valor) = (?,?,?,?,?) WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(Papelaria), id], (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve(`Id ${id} foi atualizado com sucesso!`)
                }
            })
        })
    }
    static deletaPorId(id){
        const query = "DELETE FROM papelaria WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.run(query, id, (e)=>{
                if (e){
                    reject(e.message)
                } else {
                    resolve(`Id ${id} deletado com sucesso!`)
                }
            })
        })
    }
}

export default DBMPapelaria