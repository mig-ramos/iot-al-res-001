import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateEquipamentService } from "../../services/equipament/UpdateEquipamentService";

class UpdateEquipamentController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const { name, sensorFS, sensorBS, sensorRS, sensorLS, active } = request.body as {
            name: string, sensorFS: string, sensorBS: string, sensorRS: string, sensorLS: string, active: boolean
        };

        const equipamentService = new UpdateEquipamentService()

        const device = await equipamentService.execute({ id, name, sensorFS, sensorBS, sensorRS, sensorLS, active });

        reply.send(device)
    }
}

export { UpdateEquipamentController }