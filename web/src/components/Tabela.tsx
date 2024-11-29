

const Tabela = () => {
  const dados = [
    { id: 1, name: 'Casa#34567', IRLF: true, IRLD: false, IRLE: true, IRLT: true  },
    { id: 2, name: 'Casa#36767', IRLF: true, IRLD: true, IRLE: true, IRLT: true  },
    { id: 3, name: 'Casa#39867', IRLF: true, IRLD: true, IRLE: true, IRLT: true  },
    { id: 4, name: 'Casa#34467', IRLF: true, IRLD: true, IRLE: true, IRLT: true  },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Dispositivos</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left text-gray-600">ID</th>
            <th className="px-4 py-2 border-b text-left text-gray-600">Dispositivo</th>
            <th className="px-4 py-2 border-b text-left text-gray-600">IRLF</th>
            <th className="px-4 py-2 border-b text-left text-gray-600">IRLD</th>
            <th className="px-4 py-2 border-b text-left text-gray-600">IRLE</th>
            <th className="px-4 py-2 border-b text-left text-gray-600">IRLT</th>
            <th className="px-4 py-2 border-b text-left text-gray-600"></th>
            <th className="px-4 py-2 border-b text-left text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b text-gray-800">{item.id}</td>
              <td className="px-4 py-2 border-b text-gray-800">{item.name}</td>
              <td className="px-4 py-2 border-b text-gray-800">{(item.IRLF ? "Normal":"Interceptado")}</td>
              <td className="px-4 py-2 border-b text-gray-800">{(item.IRLD ? "Normal":"Interceptado")}</td>
              <td className="px-4 py-2 border-b text-gray-800">{(item.IRLE ? "Normal":"Interceptado")}</td>
              <td className="px-4 py-2 border-b text-gray-800">{(item.IRLT ? "Normal":"Interceptado")}</td>
              <td className="px-4 py-2 border-b text-gray-800"><button className="border-2 border-blue-500 px-3 py-1 hover:bg-blue-200 rounded-xl">Editar</button></td>
              <td className="px-4 py-2 border-b text-gray-800"><button className="border-2 border-red-500 px-3 py-1 hover:bg-red-200 rounded-xl">Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
