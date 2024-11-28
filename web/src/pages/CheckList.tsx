import Device from "../components/Device";

export default function CheckList() {
    return (
        <div className="flex flex-col items-center">
            {/* <h1 className="flex justify-center text-3xl p-2">Check-list</h1> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Device name="Casa 212" active={true} />
                <Device name="Casa 212" active={true} />
                <Device name="Casa 212" active={true} />
                <Device name="Casa 212" active={true} />
                <Device name="Casa 212" active={true} />
            </div>
        </div>
    )
}