import { getQuizz, sendQuizzData } from '@/services';
import { IDestino, IQuestion, IQuizzAnswer, ISendData, IState, QuizzAction, QuizzContextType } from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import React, {
    createContext,
    useContext,
    useReducer
} from 'react';

const initialState: IState = {
    quizz: [],
    loading: false,
    msj: { tipo: "", cont: "" },
};

const reducerQuizz = (state: IState, action: QuizzAction): IState => {
    const { type, payload } = action;
    switch (type) {
        case 'setQuizz':
            //console.log("setQuizz", JSON.stringify(payload));
            return { ...state, quizz: payload ? [...payload] : [] };
        case 'setLoading':
            return { ...state, loading: payload };
        case 'setMsj':
            return { ...state, msj: payload };
        case 'setAnswerRadio':
            if (state.quizz === undefined || state.quizz === null) return state;
            let newQuizzR = [...state.quizz];
            newQuizzR[payload.index_question].questions = newQuizzR[payload.index_question].questions.map((item, index) => {
                if (index === payload.index_option) {
                    return { ...item, selected: typeof payload.value === "string" ? payload.value : String(payload.value) };
                }
                return item;
            });
            return { ...state, quizz: newQuizzR };
        case 'setAnswerCheckbox':
            if (state.quizz === undefined || state.quizz === null) return state;
            let newQuizzC = [...state.quizz];
            newQuizzC[payload.index_question].questions = newQuizzC[payload.index_question].questions.map((item, index) => {
                if (index === payload.index_option) {
                    return { ...item, checked: true };
                } else {
                    return { ...item, checked: false };
                }
            })
            return { ...state, quizz: newQuizzC };
        default:
            return state;
    }
};

const QuizzContext = createContext<QuizzContextType | null>(null);

interface QuizzProviderProps {
    children: React.ReactNode;
}

const QuizzProvider = ({ children }: QuizzProviderProps) => {
    const [state, dispatch] = useReducer(reducerQuizz, initialState);

    const {
        data: dataQuizz,
        refetch: refetchQuizz,
        isFetching: isFetchingQuizz,
        isSuccess: isSuccessQuizz
    } = useQuery({
        queryKey: ['quizz'],
        queryFn: async () => {
            const data: IQuestion[] | null = await getQuizz();
            dispatch({
                type: "setQuizz",
                payload: data,
            });
            return data;
        },
        //staleTime: 1000 * 60 * 10,
        enabled:  state.quizz === null || state.quizz === undefined || state.quizz.length===0 ,
    });

    const mutation = useMutation({
        mutationFn: async (sendData: ISendData) => {
            return sendQuizzData(sendData);
        },
        onError: (error, variables, context) => {
            console.log(error);
        },
        onSuccess: (data, variables, context) => {
            refetchQuizz()
            navega({ href: '/quizz/success' });
        },
    })
   
    const navega = ({ href, params }: IDestino) => {
        router.replace(href, params);
    };

    const handleClick = (datos: IQuizzAnswer) => {
        dispatch({
            type: datos.type === "radio" ? "setAnswerRadio" : "setAnswerCheckbox",
            payload: datos
        });
    };

    const handleSend = ({ nombre, email }: { nombre: string, email: string }) => {
        mutation.mutate({
            userData: { nombre, email },
            quizz: state.quizz,
        });
    }

    const contextValue: QuizzContextType = {
        state,
        dispatch,
        navega,
        handleClick,
        handleSend,
        dataQuizz,
        isFetchingQuizz,
        isSuccessQuizz,
        refetchQuizz
    };

    return <QuizzContext.Provider value={contextValue}>
        {children}
    </QuizzContext.Provider>;
};

export default QuizzProvider;

export const useQuizzContext = (): QuizzContextType => {
    const context = useContext(QuizzContext);
    if (context === null) {
        throw new Error("useQuizzContext must be used within a QuizzProvider");
    }
    return context;
};