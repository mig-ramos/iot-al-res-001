import { FastifyRequest, FastifyReply } from "fastify";
import { ListDeviceService } from "../services/ListDeviceService";

class ListDeviceController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const listDeviceService = new ListDeviceService()

        const devices = await listDeviceService.execute();

        reply.send(devices);
    }
}

export { ListDeviceController }