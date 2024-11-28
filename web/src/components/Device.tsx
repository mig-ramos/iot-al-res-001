interface DeviceProps {
    name: string;
    active?: any;
}

export default function Device(props: DeviceProps) {
    return (
        <div className="flex flex-col my-4">
            <div className="
            flex w-36 h-96 border-8 items-center justify-center
            border-t-green-500
            border-l-green-500
            border-b-green-500
            border-r-red-500
            ">
                <div className="flex flex-col items-center">
                    <h1 className="text-wrap text-xl font-bold">{props.name}</h1>
                    <h2>Sistema:</h2>
                    <span>{(props.active) ? "Ativo" : "Desativado"}</span>
                    <div className="mt-8">
                        <p>Falha:</p>
                        <p>Sensor LE</p>
                        <button
                            className="px-6 py-2 bg-yellow-500 rounded-xl mt-4 hover:bg-yellow-300"
                        >CIENTE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}