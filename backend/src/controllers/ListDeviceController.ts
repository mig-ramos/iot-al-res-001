import { FastifyRequest, FastifyReply } from "fastify";
import { ListDevicesService } from "../services/ListDevicesService";

class ListDevicesController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const listDeviceService = new ListDevicesService()

        const devices = await listDeviceService.execute();

        reply.send(devices);
    }
}

export { ListDevicesController }