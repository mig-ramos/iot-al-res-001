import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateEquipamentController } from "./controllers/equipament/CreateEquipamentController";
import { ListEquipamentController } from "./controllers/equipament/ListEquipamentController";
import { DeleteEquipamentController } from "./controllers/equipament/DeleteEquipamentController";
import { UpdateEquipamentController } from "./controllers/equipament/UpdateEquipamentController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/equipament", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateEquipamentController().handle(request, reply)
    })

    fastify.get("/equipament", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListEquipamentController().handle(request, reply)
    })

    fastify.delete("/equipament/del/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteEquipamentController().handle(request, reply)
    })

    fastify.put("/equipament/up/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateEquipamentController().handle(request, reply)
    })

}