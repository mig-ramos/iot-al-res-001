export default function Home() {
    return (
        <main className="scroll-mr-0">
    
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl mb-4">Painel de Administração de dispositivos IOT</h2>
                <div className="text-2xl">
                    <p>
                        Sistema de alarme, monitoramento e controle residencial. A característica principal deste sistema
                        está na utilização de sensores IR - infra-vermelhos de longo alcanse (60m), instalados no perímetro da propriedade.
                        Somente com a instalação destes sensores de infra-vermelho já inibe a intrmissão dos meliantes. E se, mesmo assim
                        for tentada a ação de ultrapassar as barreiras de infra-vermelho, um sinal de anormalidade será enviado a central
                        de controle e alarme. Este sinal identificará qual lado da propriedade está sendo violado. Mesmo que o
                        meliante se evada do local, ficará sinalizando na central de alarme até que seja reconhecida a anormalidade.
                    </p>
                    <p>A vantagem deste sistema com infra-vermelho em relação aos sistema puramente de câmeras é
                        que não precisa estar olhando para monitores de imagens, os sensores de infra-vermelho funcionam
                        monitorando o tempo todo, sem que ninguém precise ficar atento, o sistema avisa no momento que está 
                        acontecendo a anormalidade!
                    </p>
                </div>
            </div>
        </main>
    )
}