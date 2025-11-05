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
        <form
            className='flex flex-col md:flex-row gap-3 w-full'
            onSubmit={submitHandle}
        >
            <input
                type='text'
                placeholder='מה הרעיון שלך?'
                className='
          flex-1 w-full px-4 py-3 
          bg-neutral-100 text-neutral-900 
          border border-neutral-700 
          placeholder-neutral-500 
          focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent
          transition-all duration-200
        '
                value={iptValue}
                onChange={(e) => setIptValue(e.target.value)}
            />

            <button
                type="submit"
                className="
          flex w-full md:w-auto items-center justify-center gap-2 
          px-6 py-3 
          bg-amber-400 text-neutral-900 
          font-semibold text-lg cursor-pointer
          hover:bg-amber-300 
          focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900
          transition-colors duration-200
        "
            >
                <span dir='ltr'>Let&rsquo;s Go!</span>
            </button>
        </form>
    )
}

export default IdeaForm