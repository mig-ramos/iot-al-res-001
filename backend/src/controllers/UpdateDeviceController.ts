import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateDeviceService } from "../services/UpdateDeviceService";

class UpdateDeviceController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const { name, sensorFS, sensorBS, sensorRS, sensorLS, active } = request.body as {
        name: string, sensorFS: string, sensorBS: string, sensorRS: string, sensorLS: string, active: boolean};

        const deviceService = new UpdateDeviceService()

        const device = await deviceService.execute({id, name, sensorFS, sensorBS, sensorRS, sensorLS, active});

        reply.send(device)
    }
}

export { UpdateDeviceController }