import { z } from "zod";

const authFormSchema = (type: string) => z.object({
    // only sign-up
    firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(50),
    lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(50),
    address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
    city: type === 'sign-in' ? z.string().optional() : z.string().min(2).max(10),
    state: type === 'sign-in' ? z.string().optional() : z.string().min(2).max(2),
    postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(6),
    dob: type === 'sign-in' ? z.string().optional() : z.string().date(),
    ssn: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(6),
    // both of sign-up and sign-in
    email: z.string().email(),
    password: z.string().min(8).max(32),
})

export {
    authFormSchema
}