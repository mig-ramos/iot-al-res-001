import prismaClient from "../prisma";

interface CreateDeviceProps{
    name: string; 
    sensorFS: string; 
    sensorBS: string; 
    sensorRS: string; 
    sensorLS: string; 
    status: boolean;
}

class CreateDeviceService{

    async execute({name, sensorFS, sensorRS, sensorLS, sensorBS}: CreateDeviceProps){
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
                status: true
            }
        })

        return device;
    }
}

export { CreateDeviceService }
