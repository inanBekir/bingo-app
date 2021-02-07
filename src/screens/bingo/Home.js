import React, {useState, useEffect} from 'react';
import '../../styles/bingoStyles/Home.scss'
import {
  data, 
  bingoPossibilityRowData, 
  bingoPossibilityColData, 
  bingoPossibilityDiagData 
} from '../Model/BingoModel';
import Confetti from 'react-confetti';
import {useWindowSize} from 'react-use';
var _ = require('underscore');

function Home() {
  let colBingolist = [];
  const [modelData, setModelData] = useState(data);
  const {width, height} = useWindowSize();
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [bingoPossibilityRow] = useState(bingoPossibilityRowData);
  const [bingoPossibilityCol] = useState(bingoPossibilityColData);
  const [bingoPossibilityDiag] = useState(bingoPossibilityDiagData);

  useEffect(() => {
    if (notes.indexOf(12) === -1) {
      setNotes([...notes, 12]);
    }
    checkRowBingo();
    checkColBingo();
    checkDiagBingo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes]);

  const checkColBingo = () => {
    notes.sort(function(a, b){return a-b});
      for (let i = 0; i < bingoPossibilityCol.length; i++) {
        const element = bingoPossibilityCol[i];
        if (_.intersection(notes, element.checkArray).length === element.checkArray.length && element.isBingo === false) {
          element.isBingo = true;
          handleOpen();
        }
      }
  }

  const checkRowBingo = () => {
    notes.sort(function(a, b){return a-b});
      for (let i = 0; i < bingoPossibilityRow.length; i++) {
        const element = bingoPossibilityRow[i];
        if (_.intersection(notes, element.checkArray).length === element.checkArray.length && element.isBingo === false) {
          element.isBingo = true;
          handleOpen();
        }
      }
  }

  const checkDiagBingo = () => {
    notes.sort(function(a, b){return a-b});
      for (let i = 0; i < bingoPossibilityDiag.length; i++) {
        const element = bingoPossibilityDiag[i];
        if (_.intersection(notes, element.checkArray).length === element.checkArray.length && element.isBingo === false) {
          element.isBingo = true;
          handleOpen();
        }
      }
  }

  const addData = (data) => {
      for (let data of modelData) {
        if (data.selected) {
          colBingolist.push(data.id)
        }
      }
      if (notes.indexOf(data.id) === -1) {
        setNotes([...notes, data.id]);
      }
  }


  const choose = (id) => {
    let render = [...modelData];
    let d;
    for (let data of render) {
        if (data.id === id) {
          data.selected = data.selected == null ? true : !data.selected;
          d = data;
        }
    }

    setModelData(render)
    addData(d);
  }

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
  }, 5000);
  };

  return (
    <div className="container">
        {modelData.map(data => (
          data.id === 12 ? 
          <div className='freeSlot'>
            <img src="https://www.playbingoaustralia.com/wp-content/uploads/2015/02/Bingo-Night.png" alt="freeImage" width="100%"></img>
          </div> : 
          <div key={data.id} onClick={() => choose(data.id)} className={data.selected ? 'itemSelected' : 'item'}>
            <div className={data.selected ? 'numberSelected' : 'number'}>
              <p>{data.index}</p>
            </div>
            <div className="text">
              <p>{data.item}</p>
            </div>
          </div>
      ))}
     { open ? <Confetti
      width={width}
      height={height}
    /> : null}
    </div>
  );
}


export default Home;
