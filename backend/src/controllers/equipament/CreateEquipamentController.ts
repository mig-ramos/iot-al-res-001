import { FastifyRequest, FastifyReply } from "fastify";
import { CreateEquipamentService } from "../../services/equipament/CreateEquipamentService";

class CreateEquipamentController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, sensorFS, sensorBS, sensorRS, sensorLS, active, userId } = request.body as {
            name: string, sensorFS: string, sensorBS: string, sensorRS: string, sensorLS: string, active: boolean, userId: string
        };

        const equipamentService = new CreateEquipamentService()

        const device = await equipamentService.execute({ name, sensorFS, sensorBS, sensorRS, sensorLS, active, userId });

        reply.send(device)
    }
}

export { CreateEquipamentController }