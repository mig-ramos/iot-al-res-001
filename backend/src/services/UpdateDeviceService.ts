import prismaClient from "../prisma";

interface UpdateDeviceProps{
    id: string;
    name: string; 
    sensorFS: string; 
    sensorBS: string; 
    sensorRS: string; 
    sensorLS: string; 
    active?: boolean;
}

class UpdateDeviceService{

    async execute({id, name, sensorFS, sensorRS, sensorLS, sensorBS, active}: UpdateDeviceProps){
        if(!id || !name || !sensorFS || !sensorRS || !sensorLS || !sensorBS){
            throw new Error("Preencha todos os campos.");
        }

        const findDevice = await prismaClient.device.findFirst({
            where: {
                id: id
            }
        })

        if(!findDevice){
            throw("Device não existe!")
        }

        const device = await prismaClient.device.update({
            where:{
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

        return device;
    }
}

export { UpdateDeviceService }
