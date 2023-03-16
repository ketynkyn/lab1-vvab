import React, {useEffect, useState} from 'react';
import './ChoosePhoto.scss';


function App() {
  const[reset ,setReset] = useState(0)

  const [image,setImage] = useState([])
  const [imageUrls,setImageUrls] = useState([])
    const[slider, setSlider] = useState(0);
    const[slider2, setSlider2] = useState(0);
    const[slider3, setSlider3] = useState(100);
    const[slider4, setSlider4] = useState(100);

    const ChangeImage = (event) => {
    setImage([...event.target.files])
  }
  useEffect(() => {

    const newImageUrls = [];
    image.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [image]);

  const changeGrayscale = () => {
    document.getElementById("img").style.filter="grayscale("+slider+"%)"+"sepia("+slider2+"%)"+"brightness("+slider3+"%)"+"contrast("+slider4+"%)"
  }

    const ChangeFilterImage = (e) => {
        setSlider(e)
        changeGrayscale()
    }

    const ChangeFilterImage2 = (e) => {
        setSlider2(e)
        changeGrayscale()
    }
    const ChangeFilterImage3 = (e) => {
        setSlider3(e)
        changeGrayscale()
    }

    const ChangeFilterImage4 = (e) => {
        setSlider4(e)
        changeGrayscale()
    }

  return (
      <div className="App">
          <div className="boxImg">
        <input className="imgInput" type="file" id="file" accept="image/*" onChange={ChangeImage} hidden/>
              <button onClick={()=>document.getElementById("file").click()}>Вставить картинку</button>
        <div id="img-area" className="box"> {imageUrls.map(img=> <img id="img" src={img} alt="" width='auto' height='300px'/>)}</div>
              <button>скачать</button>
          </div>
          <div className="leftPanel">
        <div className="filter">Grayscale
        <input className="rangeInput" type='range' min='0' max='100' step='1' value={slider} onChange={(e)=>ChangeFilterImage(e.target.value)}/>
        </div>
            <div className="filter">Sepia
          <input className="rangeInput" type='range' min='0' max='100' step='1' value={slider2} onChange={(e)=>ChangeFilterImage2(e.target.value)}/>
          </div>
          <div className="filter">Brightness
              <input className="rangeInput" type='range' min='0' max='300' step='1' value={slider3} onChange={(e)=>ChangeFilterImage3(e.target.value)}/>
          </div>
          <div className="filter">Contrast
              <input className="rangeInput" type='range' min='0' max='200' step='1' value={slider4} onChange={(e)=>ChangeFilterImage4(e.target.value)}/>
          </div>
              <div className="filter">что-то еще
                  <input className="rangeInput" type='range' min='0' max='100' step='1' value={0}/>
              </div>
              <div className="filter">чтото еще
                  <input className="rangeInput" type='range' min='0' max='100' step='1' value={0} />
              </div>
              <div className="filter">чтото еще
                  <input className="rangeInput" type='range' min='0' max='300' step='1' value={0} />
              </div>
              <div className="filter">чтото еще
                  <input className="rangeInput" type='range' min='0' max='200' step='1' value={0} />
              </div>

          </div>
          </div>
  );
}

export default App;
