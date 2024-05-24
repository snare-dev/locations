import { Button } from "@/components/ui/button";
import { deleteProfile } from "@/services/apiCalls";
import { useAppSelector } from "@/types";

const DeleteProfile = () => {
    const auth = useAppSelector(state => state.auth.user);

    const userId = auth?.id;

    const handleDelete = (userId: string) => {
      deleteProfile(userId);
    };
    
  return (
    <div>
      <Button onClick={() => handleDelete(userId)}>Delete Profile</Button>
    </div>
  );
};

export default DeleteProfile;
