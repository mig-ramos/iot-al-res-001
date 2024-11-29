export default function About() {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-xl text-center font-bold">Sobre este Aplicativo</h1>
            <p>Como sempre as coisas partem de uma necessidade. Aconteceu uma quantidade de
                roubos à residências perto onde resido. Então, comecei a pesquisar formas de adquirir
                um sistema pronto que só fosse montar e funcionar.
                Analisando as opções no mercado, me deparei com um padrão de instalação, que até marcas famosas
                dispõe de câmeras de monitoramento. Numa destas residências até tinham instalado um sistema deste.
                Só, que estava desativado, pois, o proprietários havia dado um reset no smartphone e ficado sem o
                aplicativo de monitoramento. E mesmo que estivesse com o aplicativo, não adiantava nada, mesmo porque,
                o proprietário tinha ido viajar e não estava em sua residência e, mesmo que tivesse não iria
                registrar nada pois estava desativado.
            </p>
            <p>
                Sem contar que na pesquisa referente aos atendimentos aos clientes, tinha muita reclamação de que
                o monitoramento falhava e não tinha como resolver de imediato.
            </p>
            <p>
                Dentre os meus conhecimentos estão a eletrônica, instrumentação, elétrica e uma experiência de
                32 anos em usina siderúrgica atuando em salas de motores geradores, equipamento tiristorizados
                de alta potência e painéis supervisórios. Com estas experiências e um pouco de autodidata, comecei
                projetar um sistema em três níveis de acessos diferentes:
            </p>
            <p>
                <span className="font-bold">Primeiro nível:</span> monitora o perímetro da residência e na ocorrência de intrusão, soa o alarme afugentado
                o meliante. O proprietário vai à central de alarme e aperta o botão de reconhecimento e fica sabendo em qual lado foi a anomalia.
                Neste ponto estando tudo normalizado, o sistema volta ao estado de prontidão.
            </p>
            <p>
                <span className="font-bold">Segundo nível:</span> com todas as atribuições do primeiro nível mas, adiciona acesso via smartphone via WiFi da
                residência. Além do alarme propriamente dito anteriormente, temos agora o aviso do smartphone. Neste
                ponto, o smartphone irá mostrar onde foi a anomalia, e nem precisar ir a central de alarme, o reconhecimento
                poderá ser feito no smartphone.
            </p>
            <p>
                <span className="font-bold">Terceiro nível:</span> com todas atribuições do primeiro, do segundo, só agora pode ter acesso via internet de qualquer lugar
                do planeta.
            </p>
        </div>
    )
}