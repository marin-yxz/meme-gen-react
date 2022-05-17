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
  const [state, setState] = useState(false);
  const [change, setChange] = useState('');
  const [top, setTop] = useState('');
  const [bot, setBot] = useState('');
  const [img, setImg] = useState('');
  const [show2, setShow2] = useState('');
  let imgUrl;
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
      alert('Fields cant be empty');
    } else {
      imgUrl = `https://api.memegen.link/images/${id}/${top}/${bot}.png`;
      setImg(imgUrl);
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
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch11();
  }, []);
  function receive() {
    content = something
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      .filter((search1) => {
        if (search === '') {
          return search1;
          // eslint-disable-next-line sonarjs/no-duplicated-branches
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
                state(false);
              }}
            >
              {image.name}
            </ButtonPage>
            {image.name === state.name && (
              <Img1 src={image.blank} alt={image.name} key={image.id} />
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
              />
            </>
          )}
          {change === 'pass' && (
            <>
              <h1> {state.name}</h1>
              <Img1 src={state.blank} alt={state.name} key={state.id} />
              <DivTwice>
                <InputTwice
                  placeholder="top"
                  onChange={(event) => setTop(event.target.value)}
                />
                <InputTwice
                  placeholder="bot"
                  onChange={(event) => setBot(event.target.value)}
                />
              </DivTwice>
              <ButtonPage
                onClick={() => {
                  processImage(state.id);
                  setShow2('show');
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
                        downloadImage(img).catch({});
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
          <div className="App" />
        </MainDiv>
      </Full>
    </StrictMode>
  );
}

export default App;
