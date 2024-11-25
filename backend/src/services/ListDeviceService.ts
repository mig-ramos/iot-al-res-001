import prismaClient from "../prisma";

class ListDeviceService{

    async execute(){

        const devices = await prismaClient.device.findMany()

        return devices;
    }
}

export { ListDeviceService }
