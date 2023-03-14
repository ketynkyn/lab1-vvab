import React, {useEffect, useState} from 'react';
import './ChoosePhoto.scss';


function App() {
  const[reset ,setReset] = useState(0)
  const [grayscale, setGrayscale] = useState(false)
  const [image,setImage] = useState([])
  const [imageUrls,setImageUrls] = useState([])
  const ChangeImage = (event) => {
    setImage([...event.target.files])
  }
  useEffect(() => {
    if (image.length < 1) return;
    const newImageUrls = [];
    image.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [image]);

  const[slider, setSlider] = useState(100);
  const changeGrayscale = () => {
    setGrayscale(true)
    document.getElementById("img").style.filter="grayscale("+slider+"%)"
  }


  return (
      <div className="App">
        <input className="imgInput" type="file" id="file" accept="image/*" onChange={ChangeImage}/>
        <div id="img-area" className="box"> {imageUrls.map(img=> <img id="img" src={img} alt="" width='auto' height='300px'/>)}</div>
        { grayscale &&
        <input className="rangeInput" type='range' min='0' max='100' step='1' value={slider} onChange={(e)=>setSlider(e.target.value)}/>
        }
        <p></p><button className="grayscale" onClick={()=>{
        {
          !grayscale &&
              setSlider(100)
        }
          changeGrayscale()
      }}>Grayscale</button>
      </div>
  );
}

export default App;
