import BannerImage from "@components/generic/BannerImage"
import Typography from "@components/generic/text/Typography"
import  PrimaryButton  from '@components/generic/buttons/Primary';

const Banner = () => {
    return <BannerImage
        image="/sleeping_dog.jpg"
        elements={[{
            content:(<><Typography element={'h1'} color={'grey'} isTitle={true}>
                Imagine Waking up and...
            </Typography>
            <PrimaryButton size='big'>
                <Typography fontSize="big" color='grey' element={'span'}>
                Adopt Now 
                </Typography>
            </PrimaryButton>
            </>),
            position:{
                left:'5%',
                bottom:'0',
                right:'0',
                top:'40%'
            }
        }]}
    />
}
export default Banner