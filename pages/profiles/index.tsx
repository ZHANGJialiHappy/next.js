import Axios from "axios";

const ProfileList = ({ profile }:any) => {
    console.log(profile);
    return (
        <div>
            <h1>{profile.name} is {profile.age} years old.</h1>
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await Axios.get(
        "https://api.agify.io?name=bella"
    );

    return {
        props: {
            profile: data.data,
        },
    };
};
export default ProfileList;