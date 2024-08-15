import "./contact.scss";
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_72stnll','template_ygbllsv', e.target, 'hyUhlw3Q85D-_u9In')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  
    e.target.reset();
  };
  
  return (
    <div class="contact-form-wrapper">
  <div class="contact-form-container">
    <h2>Contact Us</h2>
    <form  onSubmit={sendEmail}>
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" name="first_name" required />
      </div>

      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" name="last_name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</div>

  );
};

export default Contact;
