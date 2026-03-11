import { Application, Request, Response } from "express";

export const initHandlers = (app: Application) => {
    app.get("/", (req, res) => {
        return res.send({
            message: "Hell world"
        })
    })

    app.get("/products", (req: Request, res: Response) => {
        return res.send([
            {id: 1, name:"courgette"},
            {id: 2, name:"pomme"},
            {id: 3, name:"ail"}
        ])
    })
} 
