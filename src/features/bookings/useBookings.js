import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const FilterValue = searchParams.get("status");
  const filter =
    !FilterValue || FilterValue === "all"
      ? null
      : { felid: "status", value: FilterValue };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings",filter],
    queryFn: () => getBookings({ filter }),
  });
  return { isLoading, bookings, error };
}
