import prismaClient from "../../prisma";

interface UpdateEquipamentProps {
    id: string;
    name: string;
    sensorFS: string;
    sensorBS: string;
    sensorRS: string;
    sensorLS: string;
    active?: boolean;
}

class UpdateEquipamentService {

    async execute({ id, name, sensorFS, sensorRS, sensorLS, sensorBS, active }: UpdateEquipamentProps) {
        if (!id || !name || !sensorFS || !sensorRS || !sensorLS || !sensorBS) {
            throw new Error("Preencha todos os campos.");
        }

        const findEquipament = await prismaClient.equipament.findFirst({
            where: {
                id: id
            }
        })

        if (!findEquipament) {
            throw ("Device não existe!")
        }

        const equipament = await prismaClient.equipament.update({
            where: {
                id: id
            },
            data: {
                name,
                sensorFS,
                sensorBS,
                sensorRS,
                sensorLS,
                active,
            }
        })

        return equipament;
    }
}

export { UpdateEquipamentService }
