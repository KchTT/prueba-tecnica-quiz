export interface IQuestion {
  id: number;
  title: string;
  imageUrl: string | null;
  description: string;
  questions: IOption[];
}

export interface IOption {
  id: number;
  index: number;
  text: string;
  answerType: string;
  checked?: boolean;
  selected?: string;
}

export type HtmlEvent =
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEventHandler<HTMLInputElement>
  | ChangeEventHandler<HTMLTextAreaElement>;


export interface IState {
    quizz: IQuestion[] | undefined | null;
    loading: boolean;
    msj: { tipo: string; cont: string };
}

export interface IQuizzAnswer {
    index_question: number;
    index_option: number;
    type: string;
    value: boolean | string;
}

export interface QuizzContextType {
    state: IState;
    dispatch: Dispatch<QuizzAction>;
    navega: (destino: RelativePathString | ExternalPathString, params?: Record<string, any>) => void;
    handleClick: (datos: any) => void;
    handleSend: ({ nombre, email }: { nombre: string, email: string }) => void;
    dataQuizz: IQuestion[] | undefined | null;
    isFetchingQuizz: boolean;
    isSuccessQuizz: boolean;
    refetchQuizz: (options?: RefetchOptions) => Promise<QueryObserverResult<IQuestion[] | undefined, Error>>;
}

export interface IDestino {
    href: RelativePathString | ExternalPathString | "/home" | "/quizz" | "/quizz/user" | "/+not-found" | '/quizz/success' 
    params?: { [key: string]: number | string }
}

export type QuizzAction =
    | { type: 'setQuizz'; payload: IQuestion[] | undefined | null }
    | { type: 'setLoading'; payload: boolean }
    | { type: 'setMsj'; payload: { tipo: string; cont: string } }
    | { type: 'setAnswerRadio'; payload: IQuizzAnswer }
    | { type: 'setAnswerCheckbox'; payload: IQuizzAnswer }

export interface ISendData {
    userData: {
        nombre: string;
        email: string;
    },
    quizz: IQuestion[] | undefined | null;
}
