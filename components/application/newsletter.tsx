"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "sonner";

const formSchema = z.object({
    email: z.string().email({
        message: "Vous devez renseigner une adresse email valide.",
    }),
});

export default function Newsletter() {
    const [open, setOpen] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Une erreur est survenue.");
            }

            toast.success("Inscription réussie !", {
                description: "Vous vous êtes inscrit à la newsletter avec succès.",
            });

            form.reset();
            setOpen(false);
        } catch (error) {
            toast.error("Oups !", {
                description: "Impossible de vous inscrire pour le moment. Veuillez réessayer.",
            });
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-[#FF00E2] hover:text-white"
                >
                    Rejoindre CoFound
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Rejoignez CoFound !</DialogTitle>
                    <DialogDescription>Soyez les premiers informés du lancement de CoFound et recevez nos ressources exclusives !</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Entrez votre adresse email..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "En cours..." : "S'inscrire à la newsletter"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}