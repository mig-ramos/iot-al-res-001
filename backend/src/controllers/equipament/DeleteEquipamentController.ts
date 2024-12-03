import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteEquipamentService } from "../../services/equipament/DeleteEquipamentService";

class DeleteEquipamentController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }

        const equipamentService = new DeleteEquipamentService();

        const equipament = await equipamentService.execute({ id });

        reply.send(equipament)
    }
}

export { DeleteEquipamentController }