 import axiosSecure from ".";
// save user information in database
export const saveUser = async (user) => {
    const currentUser = {
        name:user?.displayName,
        email: user?.email,
        image:user?.photoURL
        
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`,currentUser)
    return data;
}