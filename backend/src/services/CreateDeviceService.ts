import prismaClient from "../prisma";

class CreateDeviceService{

    async execute(){
        console.log("ROTA FOI CHAMADA");

        return { ok: true }
    }
}

export { CreateDeviceService }
