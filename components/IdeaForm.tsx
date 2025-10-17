'use client'
import { Send } from 'lucide-react'
import { useState } from 'react';

interface IdeaFormProps {
    handleGenerate: (idea: string) => void;
}

const IdeaForm = ({ handleGenerate }: IdeaFormProps) => {


    const [iptValue, setIptValue] = useState('');

    const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const idea = iptValue.trim();
        if (!idea) return;
        handleGenerate(idea)
    }

    return (
        <form className='flex flex-col md:flex-row gap-3'
            onSubmit={submitHandle}
        >
            <input type='text' placeholder='Minimalistic phoenix with geometric wings'
                className='flex-1 border rounded-xl px-4 py-3 outline-none'
                value={iptValue} onChange={(e) => setIptValue(e.target.value)}
            />
            <button className='cursor-pointer gap-2 inline-flex bg-amber-600 items-center justify-center hover:bg-amber-700 px-5 py-3 rounded-xl font-semibold shadow-sm'>
                Generate
                <Send className='w-4 h-4' />
            </button>
        </form>
    )
}

export default IdeaForm