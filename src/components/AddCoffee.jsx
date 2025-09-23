import React from 'react'

const AddCoffee = () => {
  return (
    <div className='bg-[#F4F3F0] p-20'>
        <div className='mb-10 max-w-3xl mx-auto space-y-5 text-center'>
           <h1 className='rancho-font text-4xl  font-semibold'>Add New Coffee</h1>
           <p className='text-[#1A1A1ACC]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <form action="">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Page title</legend>
                    <input type="text" className="input w-full border-none" placeholder="My awesome page" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Page title</legend>
                    <input type="text" className="input w-full border-none" placeholder="My awesome page" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Page title</legend>
                    <input type="text" className="input w-full border-none" placeholder="My awesome page" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Page title</legend>
                    <input type="text" className="input w-full border-none" placeholder="My awesome page" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Page title</legend>
                    <input type="text" className="input w-full border-none" placeholder="My awesome page" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Page title</legend>
                    <input type="text" className="input w-full border-none" placeholder="My awesome page" />
                </fieldset>
            </div>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend">Page title</legend>
                    <textarea type="text" name="w3review" rows="" cols="50" className="input w-full border-none h-10" placeholder="My awesome page" />
                </fieldset>
                <input type="submit" className='btn rancho-font w-full mt-5 bg-[#D2B48C] text-[#331A15] text-xl border-2 border-[#331A15]' value='Add Coffee' />
        </form>
    </div>
  )
}

export default AddCoffee