import prismaClient from "../../prisma";

interface DeleteEquipamentProps {
    id: string;
}

class DeleteEquipamentService {

    async execute({ id }: DeleteEquipamentProps) {
        if (!id) {
            throw new Error("Solicitação inválida.");
        }

        const findEquipament = await prismaClient.equipament.findFirst({
            where: {
                id: id
            }
        })

        if (!findEquipament) {
            throw ("Equipament não existe!")
        }

        await prismaClient.equipament.delete({
            where: {
                id: findEquipament.id
            }
        })

        return { message: "Deletado com sucesso!" };
    }
}

export { DeleteEquipamentService }
