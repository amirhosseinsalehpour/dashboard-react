import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCaben } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
export function useEditCabin() {
  const { reset } = useForm();

  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCaben(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["carbin"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
