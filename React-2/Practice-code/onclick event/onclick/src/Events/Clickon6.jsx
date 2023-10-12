// import PropTypes from 'prop-types'

const ButtonAlert = ({onClick1 , children}) => {
    return(
         <button className='button' onClick={onClick1}>{children}</button>
    );
}

const PlayButton = ({MovieName}) =>{
    const handlePlayClick = () =>{
         console.log(`Playing ${MovieName}!`)
    }
    return(
        <ButtonAlert onClick={handlePlayClick}>Play {MovieName}</ButtonAlert>
    )
}

const UploadButton = () =>{
    return(
        <ButtonAlert onClick={() => console.log("Uploding!")}>Upload</ButtonAlert>
    )
}

const ClickOn6 = () => {
    /* Passing event handlers as props */

 return (
   <div>
     <h1 className='text-6xl'>Passing event handlers as props</h1>
     <PlayButton MovieName="The Avengers">PlayMovie</PlayButton>
     <UploadButton/>

   </div>
 )
}

/*  Task-1 : Two props pass as button name and print in console */
/*  Task-2 : Four Props interchange between two function and print console one element */


export default ClickOn6