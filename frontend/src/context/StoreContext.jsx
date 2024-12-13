/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export const StoreContext = createContext(null);
  
const StoreContextProvider = (props) => {
   const[cartItems, setCartItems]=useState({});
   const url ="http://localhost:4000";
   const [token, setToken]=useState("");
   const[food_list, setFoodList] =useState([])

   const addToCart= async(itemId)=>{
    if(!cartItems[itemId]){
       setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
    }
    if(token){
      await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}})
    }
   }
   const removeFromCart =async(itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    if(token){
      await axios.post(url+"/api/cart/remove", {itemId},{headers:{token}})
    }
   }
  const getTotalCarAmount=()=>{


    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo=food_list.find((product)=>product._id===item);
        // eslint-disable-next-line no-unused-vars
        totalAmount+=itemInfo.price*cartItems[item];
        }
        
    }
    return totalAmount;
  }
  const fetchFoodList =async()=>{
    // eslint-disable-next-line no-undef
    const response= await axios.get(url +"/api/food/list")
    setFoodList(response.data.data)
  }
    const loadCartData= async(token)=>{
      const response= await axios.post(url+"/api/cart/get", {}, {headers:{token}});
      setCartItems(response.data.cartData);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCarAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
   
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
