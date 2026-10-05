import { PensionerDocs } from "../../utils/docsInterface"

const pensionerObj: PensionerDocs = {
  id: {
    name: "Cadastro de Pessoa Física",
    optionList: [
      {
        label: "sim",
        value: "id/v",
      },
      {
        label: "não",
        value: "id/n",
      },
    ],
  },
  residencia: {
    name: "C. Residencia",
    required: true,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "sim",
        value: "cr/s",
        children: [
          {
            label: "valido",
            value: "cr/v",
          },
          {
            label: "desatualizado",
            value: "cr/60",
          },
          {
            label: "terceiros",
            value: "cr/t",
            children: [
              {
                label: "declaração de residência",
                value: "dr/u",
                children: [
                  {
                    value: "dr/s",
                    label: "sim",
                  },
                  {
                    value: "dr/n",
                    label: "nao",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "não",
        value: "cr/n",
      },
    ],
  },
  comprovanteEstadoCivil: {
    name: "Comprovante Estado Civil",
    required: true,
    present: false,
    optionList: [
      {
        label: "casado",
        value: "sc/c",
        children: [
          {
            label: "presente",
            value: "sc/c/s",
          },
          {
            label: "ausente",
            value: "sc/c/a",
          },
        ],
      },
      {
        label: "uniao",
        value: "sc/u",
        children: [
          {
            label: "presente",
            value: "sc/u/s",
          },
          {
            label: "ausente",
            value: "sc/u/a",
          },
        ],
      },
      {
        label: "não requerido",
        value: "sc/n",
      },
    ],
  },
  tituloEleitor: {
    name: "Titulo Eleitor",
    required: true,
    present: false,
    optionList: [
      {
        label: "+18 anos",
        value: "+18",
        children: [
          {
            label: "presente",
            value: "+18/s",
          },
          {
            label: "ausente",
            value: "+18/a",
          },
        ],
      },
      {
        label: "menor de 18 anos",
        value: "menor",
      },
    ],
  },
}

export default pensionerObj
