import prismaClient from "../../prisma";

interface CreateEquipamentProps {
    name: string;
    sensorFS: string;
    sensorBS: string;
    sensorRS: string;
    sensorLS: string;
    active?: boolean;
    userId: string;
}

class CreateEquipamentService {

    async execute({ name, sensorFS, sensorRS, sensorLS, sensorBS, active, userId }: CreateEquipamentProps) {
        if (!name || !sensorFS || !sensorRS || !sensorLS || !sensorBS || !userId) {
            throw new Error("Preencha todos os campos.");
        }

        const equipament = await prismaClient.equipament.create({
            data: {
                name,
                sensorFS,
                sensorBS,
                sensorRS,
                sensorLS,
                active,
                userId
            }
        })

        return equipament;
    }
}

export { CreateEquipamentService }
