import DBMPapelaria from "../DAO/DBMPapelaria.js"
import PapelariaModel from "../models/PapelariaModel.js"
import Validacoes from "../services/Validacoes.js"

class Papelaria{
    static routers(app){
        app.get("/Papelaria", async (req, res) =>{
            const response = await DBMPapelaria.listarTodos()
            res.status(200).json(response)
        })
        app.get("/Papelaria/:id", async (req, res) =>{
            const selectOne = await DBMPapelaria.listaPorId(req.body.id)
            res.status(200).json(selectOne)
        })
        app.post("/Papelaria", async(req, res) => {
            try {                
                if(Validacoes.validaNome(req.body.produto) && Validacoes.validaValor(req.body.valor)){
                        const item = new PapelariaModel(...Object.values(req.body))
                        const response = await DBMPapelaria.popular(item)
                        res.status(201).json(response)
                } else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        })
        
        app.put('/Papelaria/:id', async(req, res) => {
            try {                
                if(Validacoes.validaNome(req.body.produto) && Validacoes.validaValor(req.body.valor)){
                    const updatePapelaria = await DBMPapelaria.atualizaPorId(req.body, req.body.id)
                    res.status(200).json(updatePapelaria);
                }else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        });

        app.delete('/Papelaria/:id', async (req, res) => {
            let deleteUma = await DBMPapelaria.deletaPorId(req.body.id)
            res.status(200).json(deleteUma)
        })
    }
}
export default Papelaria