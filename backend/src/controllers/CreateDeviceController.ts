import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDeviceService } from "../services/CreateDeviceService";

class CreateDeviceController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, sensorFS, sensorBS, sensorRS, sensorLS, status } = request.body as {
        name: string, sensorFS: string, sensorBS: string, sensorRS: string, sensorLS: string, status: boolean};

        const deviceService = new CreateDeviceService()

        const device = await deviceService.execute({name, sensorFS, sensorBS, sensorRS, sensorLS, status});

        reply.send(device)
    }
}

export { CreateDeviceController }