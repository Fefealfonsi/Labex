

  export const goToHome = ( navigate) => {
    navigate("/")
  };
  
  export const goToLogin = ( navigate) => {
    navigate("/login")
  };
  
  export const goToListTrips = ( navigate) => {
    navigate("/listTrips")
  };
  
  
  export const goToCreateList = ( navigate) => {
    navigate("/createTrip")
  };
  
  export const goToApplication=(id, navigate)=>{
    navigate(`/applicationForm/${id}`)
    
  } 
  export const goToDetail=(id, navigate)=>{
    navigate(`/tripDetails/${id}`)
  } 
  export const goToAdminList=(navigate)=>{
    navigate(`/admList`)
  } 