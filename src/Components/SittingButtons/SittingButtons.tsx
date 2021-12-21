import SingleSittingButton from './singleSittingButton';

 function SittingButtons():JSX.Element {
  
    return (
         <section className='sitting-section'>
             <SingleSittingButton   titlebutton='back'   />
             <SingleSittingButton  titlebutton='naxt'   />
         </section>
    )
}

export default SittingButtons;
