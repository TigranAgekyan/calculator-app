import React from 'react';

export const Button = (props: { name: string | number, func?: () => void }) => {
  
  const handleClick = props.func
    ? props.func
    : () => console.log(props.name)
  
  return (
    <div className='w-full h-full flex place-content-center items-center p-1'>
      <span
        className='bg-stone-300 w-full h-full flex place-content-center items-center rounded-lg hover:bg-stone-500 transition-colors'
        onClick={handleClick}
      > {props.name} </span>
    </div>
  )  
}

const App = () => {
  return (
    <div className='w-screen h-screen bg-stone-900 flex flex-col items-center justify-center'>
      <div id='display' className='w-full h-[40%]'>
        <span></span>
      </div>
      
      <div id='buttons' className='w-full h-full'>
        <div className='grid grid-cols-4 grid-rows-1 w-full h-full'>
          <div className='col-span-3 row-span-1 grid-cols-1 grid-rows-5 grid'>
            
            <div id='btn-slash-ac-backspace' className=' col-span-1 row-span-1 grid grid-rows-1 grid-cols-3'>
              <Button name={"AC"} />
              <Button name={"⌫"} />
              <Button name={"/"}/>
            </div>
            
            <div id='btn-numbers' className=' col-span-1 row-span-3 grid grid-cols-3 grid-rows-3'>
              {
                Array(9).fill(0).map((_, i) => (
                  <Button name={i+1}/>
                ))
              }
            </div>
            
            <div id='btn-zero-dot' className=' col-span-1 row-span-1 grid grid-rows-1 grid-cols-3'>
              <div className='row-span-full col-span-2 '>
                <Button name={0}/>
              </div>
              <Button name={"."}/>
            </div>
            
          </div>
          
          <div id='btn-side' className='col-span-1 row-span-1 grid grid-cols-1 grid-rows-20'>
            <div className='row-span-4 col-span-1'>
              <Button name={"x"}/>
            </div>
            <div className='row-span-4 col-span-1'>
              <Button name={"-"}/>
            </div>
            <div className='row-span-6 col-span-1'>
              <Button name={"+"}/>
            </div>
            <div className='row-span-6 col-span-1'>
              <Button name={"="}/>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default App;