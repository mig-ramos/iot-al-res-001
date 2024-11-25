import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateDeviceController } from "./controllers/CreateDeviceController";
import { ListDeviceController } from "./controllers/ListDeviceController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/device", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateDeviceController().handle(request, reply)
    })

    fastify.get("/devices", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListDeviceController().handle(request, reply)
    })

}