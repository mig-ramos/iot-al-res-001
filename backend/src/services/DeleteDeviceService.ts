import prismaClient from "../prisma";

interface DeleteDeviceProps{
    id: string; 
}

class DeleteDeviceService{

    async execute({id}: DeleteDeviceProps){
        if(!id){
            throw new Error("Solicitação inválida.");
        }

        const findDevice = await prismaClient.device.findFirst({
            where:{
                id: id
            }
        })

        if(!findDevice){
            throw("Device não existe!")
        }

        await prismaClient.device.delete({
            where:{
                id: findDevice.id
            }
        })

        return { message: "Deletado com sucesso!"};
    }
}

export { DeleteDeviceService }
