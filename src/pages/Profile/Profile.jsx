import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PersonalInformation from "../../sections/Profile/PersonalInformation";

function Profile() {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        <PersonalInformation />
      </main>
      <Footer />
    </>
  );
}

export default Profile;
