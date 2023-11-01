'use client'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { api } from '@/lib/axios'

interface IPrompt {
  id: string
  template: string
  title: string
}

interface IPromptSelect {
  onPromptSelected: (template: string) => void
}

export default function PromptSelect({ onPromptSelected }: IPromptSelect) {
  const [prompts, setPrompts] = useState<IPrompt[] | null>(null)

  useEffect(() => {
    api.get('/prompts').then((response) => {
      setPrompts(response.data)
    })
  }, [])

  function handlePromptSelected(promptId: string) {
    const selectedPrompts = prompts?.find((prompt) => prompt.id === promptId)

    if (!selectedPrompts) {
      return
    }

    onPromptSelected(selectedPrompts.template)
  }

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => (
          <SelectItem key={prompt.id} value={prompt.id}>
            {prompt.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
