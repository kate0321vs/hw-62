import ContactsForm from '../../components/ContactsForm/ContactsForm.tsx';
import locationIcon from '../../assets/locationIcon.png';
import phoneIcon from '../../assets/phoneIcon.png';
import emailIcon from '../../assets/emailIcon.png';

const Contacts = () => {


  return (
    <div className="container">
      <div className="mb-5 mt-5 text-center ">
        <h3 className="mb-4">Our Office</h3>
          <p>If you are living nearby, come visit us at one of our comfortable offices.</p>
          <p className='d-flex align-items-center justify-content-center'><img src={locationIcon} alt="#" className="iconImg"/>9863
            - 9867 Mill Road, Cambridge, MG09 99HT</p>
        <p className='d-flex align-items-center justify-content-center'><img src={phoneIcon} alt="#" className="iconImg"/>+1
          800 603 6035</p>
        <a className='d-flex align-items-center justify-content-center text-decoration-none' href="#"><img src={emailIcon} alt="#" className="iconImg"/>mail@demolink.org</a>
      </div>
      <div>
        <h3 className='text-center mb-4'>Get in Touch</h3>
        <ContactsForm/>
      </div>
    </div>
  );
};

export default Contacts;