import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Contact_home from './Component/Contact_home';
import Error from './Component/Error';
import Place from './Component/Place';
import Property_agent from './Component/Property_agent';
import Property_type from './Component/Property_type';
import Property_list from './Component/Property_list';
import Property_Listing from './Component/Property_Listing';
import Testimoninal from './Component/Testimoninal';
import Property from './Component/Property';
import Testimonial_home from './Component/Testimonial_home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Slider_image from './Component/Slider_image';

function App() {

let slider=[
  {
    img:require('./Image/asset 1.jpeg')
  },
  {
    img:require('./Image/asset 2.jpeg')
  },
]

let item=[
  {
    img:require('./Image/asset 10.png'),
    name:'Apartment',
    text:'123 Properties'
  },
  {
    img:require('./Image/asset 4.png'),
    name:'Apartment',
    text:'123 Properties'
  },
  {
    img:require('./Image/asset 5.png'),
    name:'Apartment',
    text:'123 Properties'
  },
  {
    img:require('./Image/asset 6.png'),
    name:'Apartment',
    text:'123 Properties'
  },
  {
    img:require('./Image/asset 6.png'),
    name:'Apartment',
    text:'123 Properties'
  },
  {
    img:require('./Image/asset 7.png'),
    name:'Apartment',
    text:'123 Properties'
  },
  {
    img:require('./Image/asset 8.png'),
    name:'Apartment',
    text:'123 Properties'
  },
  {
    img:require('./Image/asset 9.png'),
    name:'Apartment',
    text:'123 Properties'
  }

 
]
let listing=[
  {
    img:require('./Image/asset 12.jpeg'),
    price:'$12,345',
    name:' Golden Urban House For Sell',
    sell:'For Sell',
    titel:'Appartment',
    address:'123 Street, New York, USA',
    sqft:'1000 Sqft',
    bed:'3 Bed',
    bath:'2 Bath'
  },
  {
    img:require('./Image/asset 13.jpeg'),
    price:'$12,345',
    name:' Golden Urban House For Sell',
    sell:'For Rent',
    titel:'Villa',
    address:'123 Street, New York, USA',
    sqft:'1000 Sqft',
    bed:'3 Bed',
    bath:'2 Bath'
  },
  {
    img:require('./Image/asset 14.jpeg'),
    price:'$12,345',
    name:' Golden Urban House For Sell',
    sell:'For Sell',
    titel:'Office',
    address:'123 Street, New York, USA',
    sqft:'1000 Sqft',
    bed:'3 Bed',
    bath:'2 Bath'
  },
  {
    img:require('./Image/asset 15.jpeg'),
    price:'$12,345',
    name:' Golden Urban House For Sell',
    sell:'For Rent',
    titel:'Building',
    address:'123 Street, New York, USA',
    sqft:'1000 Sqft',
    bed:'3 Bed',
    bath:'2 Bath'
  },
  {
    img:require('./Image/asset 16.jpeg'),
    price:'$12,345',
    name:' Golden Urban House For Sell',
    sell:'For Sell',
    titel:'Home',
    address:'123 Street, New York, USA',
    sqft:'1000 Sqft',
    bed:'3 Bed',
    bath:'2 Bath'
  },
  {
    img:require('./Image/asset 17.jpeg'),
    price:'$12,345',
    name:' Golden Urban House For Sell',
    sell:'For Rent',
    titel:'Shop',
    address:'123 Street, New York, USA',
    sqft:'1000 Sqft',
    bed:'3 Bed',
    bath:'2 Bath'
  },
  
]
let Team=[
  {
    teamimg:require('./Image/asset 19.jpeg'),
    name:'Full Name',
    text:'Designation'
  },
  {
    teamimg:require('./Image/asset 20.jpeg'),
    name:'Full Name',
    text:'Designation'
  },
  {
    teamimg:require('./Image/asset 21.jpeg'),
    name:'Full Name',
    text:'Designation'
  },
  {
    teamimg:require('./Image/asset 22.jpeg'),
    name:'Full Name',
    text:'Designation'
  }
]
let Testimonia=[
  {
    text:'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
    img:require('./Image/asset 23.jpeg'),
    name:'Client Name',
    titel:'Profession'
  },
  {
    text:'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
    img:require('./Image/asset 24.jpeg'),
    name:'Client Name',
    titel:'Profession'
  },
  {
    text:'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
    img:require('./Image/asset 25.jpeg'),
    name:'Client Name',
    titel:'Profession'
  },
]

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home homes={item} hometeam={Team} homelist={listing} testi={Testimonia} slide={slider} />} />
        <Route path='/About' element={<About hometeam={Team} />} />
        <Route path='/Contact_home' element={<Contact_home />} />
        <Route path='/slider_img' element={ <Slider_image  sliderdata={slider}/>}  />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Error' element={<Error />} />
        <Route path='/Place' element={<Place />} />
        <Route path='/Property_agent' element={<Property_agent hometeam={Team}/>} />
        <Route path='/Property_type' element={<Property_type homes={item} />} />
        <Route path='/Property_list' element={<Property_list homelist={listing}  />} />
        <Route path='/property_Listing' element={<Property_Listing  listdata={listing}/>} />
        <Route path='/Testimoninal' element={<Testimoninal  testi={Testimonia} />} />
        <Route path='/Testimoninal_home' element={<Testimonial_home testdata={Testimonia} />} />
        <Route path='/Property' element={<Property itemdata={item}/>} />
        <Route path='/Team' element={< Team teamdata={Team}/>} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
