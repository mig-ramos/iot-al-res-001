import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDeviceService } from "../services/CreateDeviceService";

class CreateDeviceController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, sensorFS, sensorBS, sensorRS, sensorLS, active } = request.body as {
        name: string, sensorFS: string, sensorBS: string, sensorRS: string, sensorLS: string, active: boolean};

        const deviceService = new CreateDeviceService()

        const device = await deviceService.execute({name, sensorFS, sensorBS, sensorRS, sensorLS, active});

        reply.send(device)
    }
}

export { CreateDeviceController }