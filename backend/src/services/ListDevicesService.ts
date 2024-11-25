import prismaClient from "../prisma";

class ListDevicesService{

    async execute(){

        const devices = await prismaClient.device.findMany()

        return devices;
    }
}

export { ListDevicesService }
