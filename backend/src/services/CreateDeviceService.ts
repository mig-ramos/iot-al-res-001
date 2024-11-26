import prismaClient from "../prisma";

interface CreateDeviceProps{
    name: string; 
    sensorFS: string; 
    sensorBS: string; 
    sensorRS: string; 
    sensorLS: string; 
    active?: boolean;
}

class CreateDeviceService{

    async execute({name, sensorFS, sensorRS, sensorLS, sensorBS, active}: CreateDeviceProps){
        if(!name || !sensorFS || !sensorRS || !sensorLS || !sensorBS){
            throw new Error("Preencha todos os campos.");
        }

        const device = await prismaClient.device.create({
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

export { CreateDeviceService }
