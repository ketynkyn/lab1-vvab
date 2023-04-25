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
    const[sliderRed, setsliderRed] = useState(0);
    const[sliderGreen, setsliderGreen] = useState(0);
    const[sliderBlue, setsliderBlue] = useState(0);
    const[Red,setRed] = useState("0 .1 .2 .3 .4 .5 .6 .7 .8 .9 1")
    const[Green,setGreen] = useState("0 .1 .2 .3 .4 .5 .6 .7 .8 .9 1")
    const[Blue,setBlue] = useState("0 .1 .2 .3 .4 .5 .6 .7 .8 .9 1")



    const ChangeImage = (event) => {
    setImage([...event.target.files])
  }
  useEffect(() => {

    const newImageUrls = [];
    image.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [image]);


  const changeGrayscale = () => {
    document.getElementById("img").style.filter="grayscale("+slider+"%)"+"sepia("+slider2+"%)"+"brightness("+slider3+"%)"+"contrast("+slider4+"%)"+"url(#posterize)"
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

    const ChangeFilterImage5 = (e) => {
        let count=""
        for (let i=0.1;i<e;i+=0.01){
            count=i+' '
        }
        setRed(count)
        setsliderRed(e)
    }
    const ChangeFilterImage6 = (e) => {
        let count=""
        for (let i=0.1;i<e;i+=0.01){
            count=i+' '
        }
        setGreen(count)
        setsliderGreen(e)
    }
    const ChangeFilterImage7 = (e) => {
        let count=""
        for (let i=0.1;i<e;i+=0.01){
            count=i+' '
        }
        setBlue(count)
        setsliderBlue(e)
    }
    const FiltersReset =()=>{
      setSlider(0);
      setSlider2(0);
      setSlider3(100);
      setSlider4(100);
      setsliderBlue(0)
        setsliderRed(0)
        setsliderGreen(0)
        ChangeFilterImage7(0)
        ChangeFilterImage6(0)
        ChangeFilterImage5(0)
        changeGrayscale()

    }


  return (
      <div className="all">
      <div className="App">

          <div className="leftPanel">
              <div className="leftPanelInfo">Фильтры</div>
              <div className="filter">Grayscale
                  <input className="rangeInput" type='range' min='0' max='100' step='1' value={slider} onChange={(e)=>ChangeFilterImage(e.target.value)}/>
              </div>
              <div className="filter">Sepia
                  <br></br>
                  <input className="rangeInput" type='range' min='0' max='100' step='1' value={slider2} onChange={(e)=>ChangeFilterImage2(e.target.value)}/>
              </div>
              <div className="filter">Brightness
                  <input className="rangeInput" type='range' min='0' max='300' step='1' value={slider3} onChange={(e)=>ChangeFilterImage3(e.target.value)}/>
              </div>
              <div className="filter">Contrast
                  <input className="rangeInput" type='range' min='0' max='200' step='1' value={slider4} onChange={(e)=>ChangeFilterImage4(e.target.value)}/>
              </div>
              <button onClick={FiltersReset}>Сбросить фильтры</button>


          </div>
          <div className="boxImg">
        <input className="imgInput" type="file" id="file" accept="image/*" onChange={ChangeImage} hidden/>
        <div id="img-area" className="box"> {imageUrls.map(img=> <img id="img" src={img} alt="" width='auto' height='auto'/>)}</div>
              <button onClick={()=>document.getElementById("file").click()}>Вставить картинку</button>

          </div>
              <div className="rightPanel">
                  <div className="rightPanelInfo">Ванильный фильтр</div>
              <div className="filter">Red
                  <br/>
                  <input className="rangeInput" type='range' min='0' max='1' step='0.01' value={sliderRed} onChange={(e)=>ChangeFilterImage5(e.target.value)}/>
              </div>
              <div className="filter">Green
                  <input className="rangeInput" type='range' min='0' max='1' step='0.01' value={sliderGreen} onChange={(e)=>ChangeFilterImage6(e.target.value)} />
              </div>
              <div className="filter">Blue
                  <input className="rangeInput" type='range' min='0' max='1' step='0.01' value={sliderBlue} onChange={(e)=>ChangeFilterImage7(e.target.value)}/>
              </div>
          </div>
          <svg>
              <filter id="posterize">
                  <feComponentTransfer>
                      <feFuncR type="table" tableValues={Red} />
                      <feFuncG type="table" tableValues={Green} />
                      <feFuncB type="table" tableValues={Blue}/>
                  </feComponentTransfer>
              </filter>
          </svg>
          </div>
          <div className="footer">
          <footer>
              <p>
                  Вобликов Валерий
              </p>
              <p>
                  <a href="https://vk.com/ketynkyn"><img src="./asd.jpg"/></a>
              </p>
              <p>
                  Втюрин Александр
              </p>
              <p>
                  <a href="https://vk.com/mr.naught"> <img src="./asd.jpg"/></a>
              </p>
              </footer>
          </div>
      </div>
  );
}

export default App;
