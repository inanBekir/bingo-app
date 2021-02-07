import React, {useState, useEffect} from 'react';
import '../../styles/bingoStyles/Home.scss'
import {
  data, 
  bingoPossibilityRowData, 
  bingoPossibilityColData, 
  bingoPossibilityDiagData 
} from '../Model/BingoModel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStyles} from '../../styles/bingoStyles/homeStyles';
var _ = require('underscore');

function Home() {
  let colBingolist = [];
  const [modelData, setModelData] = useState(data);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [bingoPossibilityRow, setBingoPossibilityRow] = useState(bingoPossibilityRowData);
  const [bingoPossibilityCol, setBingoPossibilityCol] = useState(bingoPossibilityColData);
  const [bingoPossibilityDiag, setBingoPossibilityDiag] = useState(bingoPossibilityDiagData);

  useEffect(() => {
    if (notes.indexOf(12) === -1) {
      setNotes([...notes, 12]);
    }
    checkRowBingo();
    checkColBingo();
    checkDiagBingo();
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
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
        {modelData.map(data => (
          data.id === 12 ? 
          <div key={data.id} onClick={() => choose(data.id)} className='freeSlot'>
            <img src="https://www.playbingoaustralia.com/wp-content/uploads/2015/02/Bingo-Night.png" alt="freeImage" width="100%"></img>
          </div> : 
          <div key={data.id} onClick={() => choose(data.id)} className={data.selected ? 'itemSelected' : 'item'}>
            <div className="number">
              <p>{data.index}</p>
            </div>
            <div className="text">
              <p>{data.item}</p>
            </div>
          </div>
      ))}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img src="https://media.giphy.com/media/1wCjfLiSZ2FWhUc2vu/giphy.gif" alt="funny GIF" width="100%" height='420px'/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


export default Home;
