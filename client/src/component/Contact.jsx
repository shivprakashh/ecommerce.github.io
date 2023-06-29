import "./Contact.css"

function Contact (){
    return(
        <>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.6287778442813!2d94.76166965834312!3d16.792993532363205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfea4ed0e3bb2b%3A0x3935c0be88defad3!2sQQV6%2B5PC%2C%20Kinmalin%20Kyun%20Ward!5e1!3m2!1smy!2smm!4v1684138444014!5m2!1smy!2smm" 
        width="1800" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="bigcon">
        <form className="contactform" action="https://formspree.io/f/xqkojdag"
  method="POST">
    <input className="input" type="text" name="name" placeholder="Name"></input>
    <input type="text" className="input" name="email" placeholder="email"></input>
    <textarea type="text" className="input" name="message" placeholder="comment"></textarea>
    <input className="submit" type="submit" ></input>


        </form></div>
        </>
    )
}
export default Contact;