import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/fromSchemas'

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <FormControl>
                        <Input {...field} 
                        type={name==='password' ? 'password' : 'text'}
                        placeholder={placeholder} 
                        className="input-class" />
                    </FormControl>
                    <FormMessage className="form-message mt-2 ml-4" />
                </FormItem>
            )}
        />
    )
}

export default CustomInput