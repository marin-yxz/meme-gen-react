import './App.css';
import { StrictMode, useEffect, useState } from 'react';
import {
  ButtonPage,
  DivTwice,
  Full,
  H3,
  H4,
  Img1,
  Img2,
  InputTwice,
  List,
  ListDiv,
  MainDiv,
  SearchBar,
  SecondPictureDiv,
  TextDiv,
  UnList,
} from './styled';

function App() {
  const [something, setSomething] = useState([]);
  const [search, setSearch] = useState('');
  const [stateTrueFalse, setState] = useState(false);
  const [change, setChange] = useState('');
  const [top, setTop] = useState('');
  const [bot, setBot] = useState('');
  const [img, setImg] = useState('');
  const [show2, showImage2] = useState('');
  const [imgURL, setimgURL] = useState('');
  let ImgUrl;
  const handleMouseOver = (event) => {
    JSON.parse(event.target.dataset.info);
    setState(JSON.parse(event.target.dataset.info));
  };
  async function downloadImage(ImgUrl) {
    const image = await fetch(ImgUrl);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    console.log(ImgUrl);
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'custom_meme';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function processImage(id) {
    if (top === '' || bot === '') {
      alert('Fields can' + 't' + ' be empty');
    } else {
      ImgUrl = `https://api.memegen.link/images/${id}/${top}/${bot}.png`;
      setImg(ImgUrl);
    }
  }
  const url = 'https://api.memegen.link/templates';
  const fetch11 = async () => {
    await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((receievedData) => setSomething(receievedData));
  };
  let content;
  useEffect(() => {
    fetch11();
  }, []);
  function receive() {
    content = something
      .filter((search1) => {
        if (search === '') {
          return search1;
        } else if (search1.name.toLowerCase().includes(search.toLowerCase())) {
          return search1;
        }
      })
      .map((image) => {
        return (
          <List key={image.blank}>
            <ButtonPage
              key={image.blank}
              data-info={JSON.stringify(image)}
              onMouseOver={handleMouseOver}
              onClick={() => {
                setChange('pass');
                stateTrueFalse(false);
              }}
            >
              {image.name}
            </ButtonPage>
            {image.name === stateTrueFalse.name && (
              <Img1 src={image.blank} alt={image.name} key={image.id}></Img1>
            )}
          </List>
        );
      });
  }

  receive();
  return (
    <StrictMode>
      <Full>
        <MainDiv>
          {change !== 'pass' && (
            <>
              <TextDiv>
                <H4>Choose Image</H4>
              </TextDiv>

              <SearchBar
                type="text"
                placeholder="search"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              ></SearchBar>
            </>
          )}
          {change === 'pass' && (
            <>
              <h1> {stateTrueFalse.name}</h1>
              <Img1
                src={stateTrueFalse.blank}
                alt={stateTrueFalse.name}
                key={stateTrueFalse.id}
              ></Img1>
              <DivTwice>
                <InputTwice
                  placeholder="top"
                  onChange={(event) => setTop(event.target.value)}
                ></InputTwice>
                <InputTwice
                  placeholder="bot"
                  onChange={(event) => setBot(event.target.value)}
                ></InputTwice>
              </DivTwice>
              <ButtonPage
                onClick={() => {
                  processImage(stateTrueFalse.id);
                  showImage2('show');
                }}
              >
                Get image
              </ButtonPage>
              {show2 === 'show' && (
                <>
                  {' '}
                  <H3>Result:</H3>
                  <SecondPictureDiv>
                    <Img2
                      src={img}
                      alt="icons"
                      onClick={() => {
                        downloadImage(img);
                      }}
                    />
                  </SecondPictureDiv>
                </>
              )}
            </>
          )}
          {change !== 'pass' && (
            <ListDiv>
              <UnList>{content}</UnList>
            </ListDiv>
          )}
          <div className="App"></div>
        </MainDiv>
      </Full>
    </StrictMode>
  );
}

export default App;
