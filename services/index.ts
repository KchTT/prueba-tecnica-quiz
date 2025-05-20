 
 
import { quiz_mockup } from '@/config/quizz_mockup';
import { IQuestion, ISendData } from '@/types';
import { ConnectionError } from "../utils/errors";
//import { axiosPublic } from "../config/axios";

const ErrorHandle = (error: any) => {
  console.log(error)
  if (error.response && error.response.status && error.response.status === 403) {
    console.log("TIENE QUE SALIR PORQUE NO TIENE PERMISOS")
  } else {
    throw new ConnectionError(error)
  }
}

export const getQuizz = async (): Promise<IQuestion[] | null> => {
  try {
    //let request = await axiosPublic.get(`/quizz`)
    // return request.data  
    const data = JSON.parse(JSON.stringify(quiz_mockup))
    return data
  } catch (error) {
    ErrorHandle(error)
    return null
  }
}

export const sendQuizzData = async (dataSend: ISendData): Promise<ISendData|null> => {
  try {
     //let request = await axiosPublic.post(`/quizz`, dataSend)
    // return request.data
    return dataSend
  } catch (error) {
    ErrorHandle(error)
    return null
  }
}