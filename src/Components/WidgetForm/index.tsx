import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from '../WidgetForm/Steps/FeedbackTypeStep'
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedBackTypes ={
    BUG:{
        title:'Problema',
        image:{
            source:bugImageUrl,
            alt:'Imagem de inseto',
        }
    },
    IDEA:{
        title:'Ideia',
        image:{
            source:ideaImageUrl,
            alt:'Imagem de lamapada',
        }
        
    },
    OTHER:{
        title:'Outro',
        image:{
            source:thoughtImageUrl,
            alt:'imagem de pensamentos'
        }
    }
}

export type  FeedbackType= keyof typeof feedBackTypes;

export function WidgetForm(){

    const [feedbackType , setFeedbackType] = useState<FeedbackType | null>(null)


    function handleRestartFeedback(){
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                
            ) :(
                <FeedbackContentStep

                 feedbackType={feedbackType}
                 onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            
            <footer className="text-xs text-neutral-400">
                Feito com 🤍 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}