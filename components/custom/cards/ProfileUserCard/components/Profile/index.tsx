import UserForm from "@components/generic/forms/UserForm";
import SubmitButton from "@components/generic/wizards/SubmitButton";
import SecondaryButton from "@components/generic/buttons/Secondary";
import ConfirmPassword from "@components/custom/modals/CofirmPasswordModal/components/ConfirmPassword";
const Profile = ({initialValues}) => {
    const [isConfirmPasswordModalOpen, setIsConfirmPasswordModalOpen] = useState(false);
    const handleSubmit = async (values: any) => {
        setIsConfirmPasswordModalOpen(true);
    }
    const handleConfirmPassword = async (values: any) => {
        setIsConfirmPasswordModalOpen(true);
    }
    return <><UserForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        templateFormProps={{
            buttons: {
                submit: <SubmitButton size="small" >Save Changes</SubmitButton>,
                cancel:<SecondaryButton size="small" onClick={handleConfirmPassword}>Change Password</SecondaryButton>
            }}}
        />
        <ConfirmPassword open={isConfirmPasswordModalOpen} onFinish={()=>setIsConfirmPasswordModalOpen(false)}/>
        </>
    }
export default Profile;