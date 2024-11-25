import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateDeviceController } from "./controllers/CreateDeviceController";
import { ListDevicesController } from "./controllers/ListDeviceController";
import { DeleteDeviceController } from "./controllers/DeleteDeviceController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/device", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateDeviceController().handle(request, reply)
    })

    fastify.get("/devices", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListDevicesController().handle(request, reply)
    })

    fastify.delete("/device/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteDeviceController().handle(request, reply)
    })

}