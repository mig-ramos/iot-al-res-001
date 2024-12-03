import prismaClient from "../../prisma";

class ListEquipamentService {

    async execute() {

        const equipament = await prismaClient.equipament.findMany()

        return equipament;
    }
}

export { ListEquipamentService }
