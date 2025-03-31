import ContactForm from "../sub/ContactForm";

export default function contact() {
  return (
    <div id="contactus" className="py-5 w-100 mx-auto text-center text-white">
      {/* <h1 className="text-xl font-bold text-center">Contact Us!</h1>
      <p>Please fill in the form below</p> */}

      <ContactForm />
    </div>
  );
}
