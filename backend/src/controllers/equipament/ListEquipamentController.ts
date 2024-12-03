import { FastifyRequest, FastifyReply } from "fastify";
import { ListEquipamentService } from "../../services/equipament/ListEquipamentService";

class ListEquipamentController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listEquipamentervice = new ListEquipamentService()

        const equipament = await listEquipamentervice.execute();

        reply.send(equipament);
    }
}

export { ListEquipamentController }