import React, {useEffect, useState} from 'react';
import './ChoosePhoto.scss';




function App() {

  const [image,setImage] = useState([])
  const [imageUrls,setImageUrls] = useState([])
  const ChangeImage = (event) => {
    setImage([...event.target.files])
    console.log(event.target.files)
  }

  useEffect(() =>{
    if (image.length < 1) return;
    const newImageUrls = [];
    image.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [image]);

  return (
      <div className="App">
        <input type="file" id="file" accept="image/*" onChange={ChangeImage}/>
        <div id="img-area" className="box"> {imageUrls.map(img=> <img src={img} alt=""/>)}</div>
          .
      </div>
  );
}

export default App;
