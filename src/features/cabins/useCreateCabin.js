import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCaben } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
export function useCreateCabin() {
  const { reset } = useForm();
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCaben,
    onSuccess: () => {
      toast.success("Create Cabin");
      queryClient.invalidateQueries({
        queryKey: ["carbin"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return {createCabin , isCreating}
}
