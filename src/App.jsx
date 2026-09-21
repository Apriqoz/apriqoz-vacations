import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  ArrowRight, Check, ChevronRight, Facebook, Instagram, Mail, MapPin,
  Menu, Phone, ShieldCheck, Star, Users, Wallet, X, Youtube, Globe2,
  Heart, BriefcaseBusiness, Plane, Hotel, Car, CalendarDays, MessageCircle
} from "lucide-react";
import andamanImage from "./Photo/Andaman.avif";
import baliImage from "./Photo/Bali.avif";
import dubaiImage from "./Photo/Dubai.avif";
import goaImage from "./Photo/Goa.avif";
import gujaratImage from "./Photo/Gujarat.avif";
import himachalPradeshImage from "./Photo/HimachalPradesh.avif";
import kashmirImage from "./Photo/Kashmir.avif";
import keralaImage from "./Photo/Kerla.avif";
import ladakhImage from "./Photo/Ladakh.avif";
import maldivesImage from "./Photo/Maldives.avif";
import northEastImage from "./Photo/NorthEast.avif";
import rajasthanImage from "./Photo/Rajasthan.avif";
import seychellesImage from "./Photo/seychelles.avif";
import sikkimImage from "./Photo/Sikkim.avif";
import singaporeImage from "./Photo/Singapore.avif";
import southAfricaImage from "./Photo/southAfrica.avif";
import turkeyImage from "./Photo/Turkey.avif";
import uttarakhandImage from "./Photo/Uttarakhand.avif";
import vietnamImage from "./Photo/Vietnam.avif";
import thailandImage from "./Photo/Thailand.jpg";
import southIndiaImage from "./Photo/SouthIndia.jpg";
import malaysiaImage from "./Photo/Malaysia.jpg";
import sriLankaImage from "./Photo/SriLanka.jpg";
import bakuImage from "./Photo/Baku.jpg";

const phone = "+91 7796351777";
const whatsapp = "https://wa.me/917796351777";
const email = "mailto:info@apriqoz.com";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=31%20Takshashila%20Society%2C%20Shree%20Ostwal%20Wondercity%2C%20Boisar%20East%2C%20Palghar%2C%20Maharashtra%20401501";
const mapEmbedUrl = "https://www.google.com/maps?q=31%20Takshashila%20Society%2C%20Shree%20Ostwal%20Wondercity%2C%20Boisar%20East%2C%20Palghar%2C%20Maharashtra%20401501&output=embed";

const social = {
  facebook: "https://www.facebook.com/share/p/19gJCyfM5Z/",
  instagram: "https://www.instagram.com/apriqozvacations/",
  youtube: "https://www.youtube.com/@ApriqozVacations",
  twitter: "https://x.com/apriqoz"
};

/*
  Video sources:
  - Domestic: Kerala hills, Goa beach, Indian Himalayas
  - International: Bali, Thailand, Dubai, Bangkok
  These are Pexels-hosted stock videos and can be replaced later with Apriqoz-owned
  video files in /public/videos/ for faster loading and full brand control.
*/
const domesticVideos = [
  {
    src: "https://videos.pexels.com/video-files/35530813/15052451_2160_3840_30fps.mp4",
    label: "Kerala • Green Hills"
  },
  {
    src: "https://videos.pexels.com/video-files/15740825/15740825-uhd_3840_2160_58fps.mp4",
    label: "Goa • Beach"
  },
  {
    src: "https://videos.pexels.com/video-files/35264586/35264586-uhd_3840_2160_30fps.mp4",
    label: "Himalayas • Mountains"
  }
];

const internationalVideos = [
  {
    src: "https://videos.pexels.com/video-files/10839582/10839582-hd_3840_2160_24fps.mp4",
    label: "Bali • Island Escape"
  },
  {
    src: "https://videos.pexels.com/video-files/4133023/4133023-uhd_3840_2160_30fps.mp4",
    label: "Thailand • Tropical Nature"
  },
  {
    src: "https://videos.pexels.com/video-files/19873372/19873372-hd_1080_1920_30fps.mp4",
    label: "Dubai • Skyline"
  },
  {
    src: "https://videos.pexels.com/video-files/29927311/12844331_3840_2160_60fps.mp4",
    label: "Bangkok • City"
  }
];

const domestic = [
  ["Goa","2N/3D","₹13,299","Beaches • Leisure • North & South Goa",goaImage],
  ["Kerala","4N/5D","₹15,775","Munnar • Thekkady • Alleppey",keralaImage],
  ["Rajasthan","4N/5D","₹22,299","Jaipur • Jodhpur • Jaisalmer",rajasthanImage],
  ["Himachal Pradesh","4N/5D","₹21,111","Shimla • Manali • Mountains",himachalPradeshImage],
  ["Kashmir","5N/6D","₹18,761","Srinagar • Gulmarg • Pahalgam",kashmirImage],
  ["Andaman","4N/5D","₹30,999","Island • Beach • Water Experiences",andamanImage],
  ["North East","5N/6D","₹22,999","Meghalaya • Assam • Scenic Northeast",northEastImage],
  ["Ladakh","5N/6D","₹45,999","Leh • Pangong • High-Altitude Adventure",ladakhImage],
  ["Gujarat","3N/4D","₹18,999","Dwarka • Somnath • Gir • Ahmedabad",gujaratImage],
  ["South India","5N/6D","₹33,299","Tamil Nadu • Karnataka • Kerala",southIndiaImage],
  ["Uttarakhand","4N/5D","₹21,999","Mussoorie • Rishikesh • Nainital",uttarakhandImage],
  ["Sikkim","4N/5D","₹24,999","Gangtok • Tsomgo • Himalayan Views",sikkimImage]
];

const international = [
  ["Thailand","4N/5D","₹45,999","Bangkok • Pattaya / Phuket",thailandImage],
  ["Dubai","4N/5D","₹33,877","City Tour • Desert Safari • Cruise",dubaiImage],
  ["Vietnam","7N/8D","₹43,540","Hanoi • Da Nang • Ho Chi Minh",vietnamImage],
  ["Bali","4N/5D","₹34,999","Ubud • Kuta • Nusa Penida",baliImage],
  ["Singapore","4N/5D","₹49,999","City • Sentosa • Universal Studios",singaporeImage],
  ["Malaysia","4N/5D","₹36,999","Kuala Lumpur • Genting • City",malaysiaImage],
  ["Maldives","3N/4D","₹59,999","Resort • Lagoon • Island Escape",maldivesImage],
  ["Sri Lanka","4N/5D","₹39,999","Colombo • Kandy • Bentota",sriLankaImage],
  ["Baku","4N/5D","₹63,999","Old City • Flame Towers • Gobustan",bakuImage],
  ["Turkey","6N/7D","₹1,20,000","Istanbul • Cappadocia • Experiences",turkeyImage],
  ["Seychelles","4N/5D","₹99,999","Island • Beach • Premium Escape",seychellesImage],
  ["South Africa","7N/8D","₹2,40,999","Cape Town • Safari • Scenic Routes",southAfricaImage]
];

const serviceItems = [
  [Globe2,"Domestic & International","Customized holidays across India and popular international destinations."],
  [Heart,"Honeymoon Holidays","Couple-friendly stays, romantic experiences and thoughtfully paced itineraries."],
  [Users,"FIT • GIT • Family","Travel solutions for individuals, families, groups and corporate requirements."],
  [Wallet,"Hotels • Flights • Transfers","End-to-end travel components coordinated through one travel partner."],
  [Hotel,"Hotel Booking","Suitable hotel categories from practical stays to premium options."],
  [Plane,"Flight Booking","Domestic and international flight booking assistance."],
  [Car,"Transfers & Sightseeing","Airport transfers, intercity travel and sightseeing arrangements."],
  [BriefcaseBusiness,"Support","Customized packages, Hospitality, destination and MICE support."]
];

function SocialButtons(){
  return <div className="social-float" aria-label="Apriqoz Vacations social links">
    <a className="youtube" href={social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube/></a>
    <a className="instagram" href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
      <Instagram/>
    </a>
    <a className="facebook" href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a>
    <a className="wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
  </div>
}

function Header(){
  const [open,setOpen]=React.useState(false);
  const location = useLocation();
  const links=[["Home","/"],["About","/about"],["Domestic","/domestic"],["International","/international"],["Services","/services"],["Contact","/contact"]];
  return <header className="nav">
    <Link className="brand" to="/" onClick={()=>setOpen(false)}><img src="/logo.png" alt="Apriqoz Vacations"/></Link>
    <nav className={open?"navlinks open":"navlinks"}>
      {links.map(([name,path])=><Link key={name} to={path} className={location.pathname===path?"active":""} onClick={()=>setOpen(false)}>{name}</Link>)}
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Plan My Trip <ArrowRight size={16}/></a>
    </nav>
    <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>
}

function Footer(){
 return <footer><div className="footer-main">
  <div className="footer-brand"><img src="/logo.png" alt="Apriqoz Vacations"/><p>Travel • Tours • Holidays • Hospitality • Events</p><div className="footer-social"><a href={social.instagram} target="_blank" rel="noreferrer"><Instagram/></a><a href={social.youtube} target="_blank" rel="noreferrer"><Youtube/></a><a href={social.facebook} target="_blank" rel="noreferrer"><Facebook/></a></div></div>
  <div><h4>Pages</h4><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/domestic">Domestic</Link><Link to="/international">International</Link><Link to="/services">Services</Link><Link to="/contact">Contact</Link></div>
  <div><h4>Travel</h4><Link to="/domestic">India Holidays</Link><Link to="/international">International Holidays</Link><a href={whatsapp}>Honeymoon</a><a href={whatsapp}>Family & Groups</a></div>
  <div><h4>Contact</h4><a href={`tel:${phone.replace(/\s/g,"")}`}>{phone}</a><a href={email}>info@apriqoz.com</a><span>Mon - Sat<br/>9:00 AM - 9:00 PM</span><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={14}/> View on Google Maps</a></div>
  <div className="footer-map"><h4>Find us</h4><iframe src={mapEmbedUrl} title="Apriqoz Vacations office location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={13}/></a></div>
 </div><div className="copyright"><span>© {new Date().getFullYear()} Apriqoz Vacations. All rights reserved.</span><div className="footer-legal"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-and-conditions">Terms & Conditions</Link></div></div></footer>
}

function VideoHero({type="domestic"}){
 const videos=type==="international"?internationalVideos:domesticVideos;
 const [index,setIndex]=React.useState(0);
 const videoRef=React.useRef(null);
 React.useEffect(()=>{const t=setInterval(()=>setIndex(i=>(i+1)%videos.length),8000);return()=>clearInterval(t)},[videos.length]);
 React.useEffect(()=>{if(videoRef.current){videoRef.current.load(); videoRef.current.play().catch(()=>{})}},[index]);
 return <section className="video-hero">
   <video ref={videoRef} key={videos[index].src} autoPlay muted loop playsInline className="hero-video">
     <source src={videos[index].src} type="video/mp4"/>
   </video>
   <div className="video-overlay"/>
   <div className="hero-copy">
     <span className="eyebrow"><Star size={15}/> APRIQOZ VACATIONS</span>
     <h1>{type==="international"?<>Explore the <em>World.</em></>:<>Discover <em>India.</em></>}</h1>
     <p>{type==="international"?"Bali, Thailand, Dubai, Bangkok and more — international holidays designed around your journey.":"Mountains, beaches, backwaters, heritage and culture — explore beautiful India your way."}</p>
     <div className="hero-actions"><Link className="btn primary" to={type==="international"?"/international":"/domestic"}>View Packages <ArrowRight/></Link><a className="btn glass" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Us</a></div>
     <div className="video-label"><span className="pulse"></span>{videos[index].label}</div>
   </div>
   <div className="video-dots">{videos.map((v,i)=><button key={v.src} className={i===index?"selected":""} onClick={()=>setIndex(i)} aria-label={v.label}/>)}</div>
 </section>
}

function PageTitle({eyebrow,title,text}){
 return <section className="page-title"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{text}</p></section>
}

function PackageCard({item}){
 const [name,duration,price,text,image]=item;
 return <article className="package"><img src={image} alt={name}/><div className="package-body"><span>{duration}</span><h3>{name}</h3><p>{text}</p><span>• STARTING FROM</span><strong>{price}<small> / person*</small></strong><a href={whatsapp} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowRight size={15}/></a></div></article>
}

function Packages({internationalPage=false}){
 const list=internationalPage?international:domestic;
 return <><Header/><VideoHero type={internationalPage?"international":"domestic"}/><section className="section light">
   <div className="heading"><div><span className="kicker">{internationalPage?"INTERNATIONAL":"DOMESTIC"}</span><h2>{internationalPage?"Popular international holidays":"Popular Indian holidays"}</h2></div><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">Get Custom Quote <ArrowRight/></a></div>
   <div className="package-grid">{list.map((x,i)=><PackageCard item={x} key={x[0]+i}/>)}</div>
   <p className="price-note">*Indicative starting prices only. Final price varies by travel date, hotel category, occupancy, flights, taxes, season and inclusions.</p>
 </section><CTA/><Footer/><SocialButtons/></>
}

function About(){
 return <><Header/><PageTitle eyebrow="ABOUT APRIQOZ VACATIONS" title={<>Travel with <em>purpose.</em></>} text="Apriqoz Vacations helps travelers plan practical, memorable domestic and international holidays with customized itineraries and personal assistance."/>
 <section className="section about-grid"><div><img className="about-img" src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=85" alt="Travel"/></div><div><span className="kicker">WHO WE ARE</span><h2>Journeys beyond <em>expectations.</em></h2><p>Apriqoz Vacations offers domestic and international travel services for couples, families, groups, FIT and customized holiday requirements.</p><p>From destination planning to hotels, flights, transfers, sightseeing and experiences, we bring the key parts of a trip together in one place.</p><div className="mini-points"><div><Check/> Customized itineraries</div><div><Check/> Hotel & flight booking</div><div><Check/> Transfers & sightseeing</div><div><Check/> Honeymoon & family travel</div></div></div></section>
 <section className="stats"><div><b>FIT</b><span>Individual Travel</span></div><div><b>GIT</b><span>Group Travel</span></div><div><b>24/7</b><span>Travel assistance</span></div><div><b>MICE</b><span>Corporate &amp; Group Travel</span></div><div><b>100+</b><span>Destinations Covered</span></div><div><b>50+</b><span>Customized Packages</span></div><div><b>20+</b><span>Trusted Travel Partners</span></div><div><b>18+</b><span>Experience in Hospitality</span></div></section><CTA/><Footer/><SocialButtons/></>
}

function Services(){
 return <><Header/><PageTitle eyebrow="OUR SERVICES" title={<>One partner. <em>Many journeys.</em></>} text="From the first idea to the final transfer, Apriqoz Vacations can coordinate the travel essentials for a smooth holiday."/>
 <section className="section"><div className="service-grid light-services">{serviceItems.map(([Icon,title,text])=><div className="service-card" key={title}><div className="service-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Enquire <ArrowRight/></a></div>)}</div></section><CTA/><Footer/><SocialButtons/></>
}

function Contact(){
 const [form,setForm]=React.useState({name:"",phone:"",destination:"",message:""});
 const submit=e=>{e.preventDefault();const t=`Hello Apriqoz Vacations,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADestination: ${form.destination}%0ARequirement: ${form.message}`;window.open(`${whatsapp}?text=${t}`,"_blank")};
 return <><Header/><PageTitle eyebrow="CONTACT APRIQOZ VACATIONS" title={<>Let's plan your <em>next trip.</em></>} text="Tell us where you want to go, when you want to travel and how many people are travelling."/>
 <section className="contact section"><div className="contact-info"><span className="kicker">GET IN TOUCH</span><h2>Let's make it <em>happen.</em></h2><p>Call, email or send your requirement on WhatsApp. Our team will share suitable travel options.</p><div className="contact-list"><a href={`tel:${phone.replace(/\s/g,"")}`}><Phone/><span><small>Call us</small>{phone}</span></a><a href={email}><Mail/><span><small>Email</small>info@apriqoz.com</span></a><div><MapPin/><span><small>Address</small>31, Takshashila Society, Shree Ostwal Wondercity, Boisar (E), Palghar, Maharashtra - 401501</span></div><div><CalendarDays/><span><small>Office Hours</small>Mon – Sat: 9:00 AM – 9:00 PM</span></div></div></div>
 <form className="contact-form" onSubmit={submit}><h3>Free Travel Quote</h3><p>Your enquiry will open directly in WhatsApp.</p><label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Phone<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91"/></label><label>Destination<input value={form.destination} onChange={e=>setForm({...form,destination:e.target.value})} placeholder="Kerala / Thailand / Dubai..."/></label><label>Requirement<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows="5" placeholder="Travel dates, travellers, budget, hotel category, etc."/></label><button className="btn primary full">Send on WhatsApp <ArrowRight/></button></form></section><Footer/><SocialButtons/></>
}

function LegalPage({type}){
 const privacy=type==="privacy";
 return <><Header/><PageTitle eyebrow={privacy?"APRIQOZ VACATIONS":"TRAVEL TERMS"} title={privacy?<>Privacy <em>Policy.</em></>:<>Terms & <em>Conditions.</em></>} text={privacy?"How Apriqoz Vacations collects, uses and protects information shared through our travel services and website.":"The terms that apply when you browse our website, request a quote or book travel services with Apriqoz Vacations."}/>
 <main className="legal-page section">
  <p className="legal-updated">Last updated: September 21, 2026</p>
  {privacy?<>
   <section><h2>Information we collect</h2><p>We may collect your name, phone number, email address, travel preferences, passenger details, booking requirements and information you choose to send through our contact forms, WhatsApp or email.</p></section>
   <section><h2>How we use information</h2><p>We use information to prepare quotations, arrange bookings, communicate about itineraries, provide support, improve our services and meet applicable legal or accounting requirements.</p></section>
   <section><h2>Service providers and payments</h2><p>Relevant details may be shared with airlines, hotels, transport providers, destination management companies, insurers, payment partners and other suppliers needed to deliver your trip. Payment information is handled through the applicable payment provider and is not intentionally stored by us unless required for a transaction record.</p></section>
   <section><h2>Cookies and security</h2><p>Our website or service providers may use basic cookies or similar technologies for functionality, analytics and performance. We use reasonable safeguards, but no online transmission or storage system can be guaranteed completely secure.</p></section>
   <section><h2>Your choices</h2><p>You may ask us to update inaccurate information, explain how your information is used or request deletion where legally possible. Some records must be retained for bookings, disputes, fraud prevention or legal obligations.</p></section>
   <section><h2>Contact</h2><p>For privacy questions, contact <a href={email}>info@apriqoz.com</a> or call {phone}.</p></section>
  </>:<>
   <section><h2>Quotes and bookings</h2><p>All quotations are indicative until confirmed in writing and paid as agreed. Availability, fares, hotel rates, taxes, exchange rates and inclusions can change before confirmation. A booking becomes active only after the required payment and confirmation from Apriqoz Vacations or the relevant supplier.</p></section>
   <section><h2>Prices and payments</h2><p>Prices are generally quoted in Indian Rupees and may vary by travel dates, occupancy, hotel category, flights, taxes, season and supplier conditions. Payment deadlines, instalments and balance amounts will be stated in your quotation or invoice.</p></section>
   <section><h2>Changes and cancellations</h2><p>Changes, cancellations and refunds are governed by the rules of the airline, hotel, transport operator, activity provider, insurer or other supplier. Supplier penalties, fare differences, service fees and applicable taxes may apply. We will communicate the available options and process eligible refunds after receiving the supplier’s settlement.</p></section>
   <section><h2>Travel documents and responsibility</h2><p>Travelers are responsible for valid passports, visas, permits, vaccination certificates, insurance and other required documents. Travelers should review names, dates, inclusions and restrictions on confirmations and notify us promptly about errors.</p></section>
   <section><h2>Suppliers, disruptions and liability</h2><p>Travel services are delivered by independent suppliers. We assist with coordination but cannot control supplier operations, delays, cancellations, weather, government actions, strikes, natural events or other force majeure circumstances. Our responsibility is limited to the services we directly provide and to the extent permitted by applicable law.</p></section>
   <section><h2>Traveler conduct</h2><p>Travelers must follow supplier rules, local laws, safety instructions and property policies. Additional costs caused by damage, misconduct, missed departures or failure to follow instructions may be charged to the traveler.</p></section>
   <section><h2>Contact</h2><p>For booking questions or assistance, contact <a href={email}>info@apriqoz.com</a> or WhatsApp us at {phone}.</p></section>
  </>}
 </main><Footer/><SocialButtons/></>
}

function Home(){
 const homeVideos=[...internationalVideos,...domesticVideos];
 const [index,setIndex]=React.useState(0);
 const videoRef=React.useRef(null);
 React.useEffect(()=>{const t=setInterval(()=>setIndex(i=>(i+1)%homeVideos.length),7000);return()=>clearInterval(t)},[homeVideos.length]);
 React.useEffect(()=>{if(videoRef.current){videoRef.current.load();videoRef.current.play().catch(()=>{})}},[index]);
 return <><Header/><section className="home-hero">
   <video ref={videoRef} key={homeVideos[index].src} autoPlay muted loop playsInline className="home-video"><source src={homeVideos[index].src} type="video/mp4"/></video>
   <div className="home-overlay"/><div className="home-copy"><span className="eyebrow"><Star/> JOURNEYS BEYOND EXPECTATIONS</span><h1>Travel more.<br/><em>Experience more.</em></h1><p>Customized domestic and international holidays for couples, families, groups and individual travelers.</p><div className="hero-actions"><Link to="/domestic" className="btn primary">Explore India <ArrowRight/></Link><Link to="/international" className="btn glass">Explore International</Link></div><div className="home-video-label"><span className="pulse"/>{homeVideos[index].label}</div></div>
   <div className="home-video-dots">{homeVideos.map((v,i)=><button key={v.src} className={i===index?"selected":""} onClick={()=>setIndex(i)} aria-label={`Show ${v.label}`}/>)}</div>
 </section>
 <section className="quick-links"><Link to="/domestic"><Globe2/><span><small>DOMESTIC</small>Explore India</span><ArrowRight/></Link><Link to="/international"><Plane/><span><small>INTERNATIONAL</small>Explore the World</span><ArrowRight/></Link><Link to="/services"><ShieldCheck/><span><small>SERVICES</small>Travel Support</span><ArrowRight/></Link></section>
 <section className="section about-home"><div><span className="kicker">ABOUT APRIQOZ</span><h2>Your journey, <em>your way.</em></h2><p>We create customized travel experiences with handpicked stays, flights, transfers, sightseeing and memorable experiences.</p><Link className="text-link" to="/about">Know more about us <ArrowRight/></Link></div><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85" alt="Travel landscape"/></section>
 <section className="section light"><div className="heading"><div><span className="kicker">POPULAR</span><h2>Travel across <em>India & the World</em></h2></div></div><div className="split-promo"><Link to="/domestic" className="promo domestic"><span>DOMESTIC HOLIDAYS</span><h3>Discover India</h3><p>North • South • East • West • Northeast</p><b>View Packages <ArrowRight/></b></Link><Link to="/international" className="promo international"><span>INTERNATIONAL HOLIDAYS</span><h3>See the World</h3><p>Bali • Thailand • Dubai • Bangkok & more</p><b>View Packages <ArrowRight/></b></Link></div></section>
 <CTA/><Footer/><SocialButtons/></>
}

function CTA(){return <section className="cta"><div><span className="kicker">CUSTOMIZED TRAVEL</span><h2>Have a destination in mind?</h2><p>Send your dates, travellers and budget. We’ll build a suitable package around you.</p></div><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp for Quote <ArrowRight/></a></section>}

function App(){
 return <BrowserRouter><Routes>
  <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/domestic" element={<Packages/>}/><Route path="/international" element={<Packages internationalPage/>}/><Route path="/services" element={<Services/>}/><Route path="/contact" element={<Contact/>}/><Route path="/terms-and-conditions" element={<LegalPage type="terms"/>}/><Route path="/privacy-policy" element={<LegalPage type="privacy"/>}/>
 </Routes></BrowserRouter>
}
export default App;
