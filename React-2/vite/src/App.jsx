import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Shoes from './assets/sport.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Puma from './assets/Puma.svg';

export default function ButtonUsage() {

  return (
    <>
      <div className='main bg-[#C88EFE] h-screen grid place-content-center'>
        <h1 className='text-7xl text-white font-semibold'>Iteam Card using HTML&CSS</h1>
        <div className='flex justify-center mt-3'>
          <div className='card bg-white h-auto w-80 m-2 p-3 shadow-lg rounded-lg'>
            <div className='flex justify-between '>
              <img className='h-8 w-8' src={Puma} alt="" />
              <ShoppingCartIcon />
            </div>
            <div>
              <img className='bg-white my-3' src={Shoes} alt="" />
            </div>
            <div>
              <h1 className='text-2xl font-bold my-1'>XRay Jr Dark</h1>
              <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eum eius non dolore tempore facilis quaerat laudantium asperiores.</p>
              <StarRating />
            </div>
            <div className='mt-2'>
              <span className='font-bold text-3xl flex justify-center'><sup className='text-green-700 top-1'>$</sup>5.00/-</span>
            </div>
            <div className='bg-[#C88EFE] text-center rounded-full mt-3'>
              <Button className=' text-white'>Add To Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export function StarRating() {
  const [value, setValue] = React.useState(2);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Stack spacing={1}>
        <Rating style={{color:"#C88EFE"}} className="my-2" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
      </Stack>
    </Box>
  )
}
