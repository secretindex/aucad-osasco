import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react"

import { PensionerDocuments } from "../utils/endTextObject"

export const pensionerContextDocs: PensionerDocuments = {
  id: "id/n",
  residencia: "cr/n",
  estadoCivil: "cns/nr",
}

export interface PensionerContentType {
  docs: PensionerDocuments
  setDocs: Dispatch<SetStateAction<PensionerDocuments>>
}

const PensionerContext = createContext<PensionerContentType | undefined>(undefined)

interface ContextProps {
  children: ReactNode
}

const PensionerContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [docs, setDocs] = useState<PensionerDocuments>(pensionerContextDocs)

  return <PensionerContext.Provider value={{ docs, setDocs }}>{children}</PensionerContext.Provider>
}

export { PensionerContextProvider, PensionerContext }
