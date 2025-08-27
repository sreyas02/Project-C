import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertWaitlistSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { CheckCircle, Shield } from "lucide-react";

const formSchema = insertWaitlistSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  clinicName: z.string().min(1, "Clinic name is required"),
  clinicSize: z.string().min(1, "Please select clinic size"),
});

type FormData = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      clinicName: "",
      clinicSize: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Get ready for 10% off!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist/stats"] });
    },
    onError: (error: any) => {
      const message = error.message || "Something went wrong. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Your email address"
                    data-testid="input-email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none text-charcoal"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clinicName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Clinic name"
                    data-testid="input-clinic-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none text-charcoal"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clinicSize"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger 
                      data-testid="select-clinic-size"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none text-charcoal"
                    >
                      <SelectValue placeholder="Select clinic size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-5">Small (1-5 providers)</SelectItem>
                    <SelectItem value="5-20">Medium (5-20 providers)</SelectItem>
                    <SelectItem value="20+">Large (20+ providers)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={mutation.isPending}
            data-testid="button-join-waitlist"
            className="w-full bg-medical-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {mutation.isPending ? "Joining..." : "Join Waitlist - Get 10% Off"}
          </Button>
        </form>
      </Form>

      <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 text-success-green mr-2" />
          <span>No spam, ever</span>
        </div>
        <div className="flex items-center">
          <Shield className="w-4 h-4 text-success-green mr-2" />
          <span>HIPAA compliant</span>
        </div>
      </div>
    </div>
  );
}
