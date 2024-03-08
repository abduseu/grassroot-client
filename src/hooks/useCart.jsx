import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosBase } from "./useAxios";

const useCart = () => {
    const { user} = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosBase.get(`/cart?userId=${user.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;