import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteDeviceService } from "../services/DeleteDeviceService";

class DeleteDeviceController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        console.log(id) 

        const deviceService = new DeleteDeviceService();

        const device = await deviceService.execute({ id });

        reply.send(device)
    }
}

export { DeleteDeviceController }