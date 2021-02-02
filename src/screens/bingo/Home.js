import React, {useState} from 'react';
import '../../styles/bingoStyles/Home.scss'
import {data} from '../Model/BingoModel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStyles} from '../../styles/bingoStyles/homeStyles';

function Home() {
  let colBingolist = [];
  const [modelData, setModelData] = useState(data);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const checkRowBingo = () => {
      let isBingo = [];
      for (let data of modelData) {
        if (data.selected) {
          colBingolist.push(data.id)
        }
      }
      for (var i = 0; i < colBingolist.length; i++) {
        isBingo.push(colBingolist[i])
      }
      if (isBingo.length >= 5) {
        if (isBingo.length!==Math.max(...isBingo)-Math.min(...isBingo)+1) {
          console.log('no bingo')
        }else {
          handleOpen();
        }
      }
  }


  const choose = (id) => {
    let render = [...modelData];
    
    for (let data of render) {
        if (data.id === id) {
          data.selected = data.selected == null ? true : !data.selected;
        }
    }

    setModelData(render)
    checkRowBingo();
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
          <div onClick={() => choose(data.id)} className='freeSlot'>
            <img src="https://www.playbingoaustralia.com/wp-content/uploads/2015/02/Bingo-Night.png" alt="freeImage" width="100%"></img>
          </div> : 
          <div onClick={() => choose(data.id)} className={data.selected ? 'itemSelected' : 'item'}>
            <div className="number">
              <p>{data.id}</p>
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
