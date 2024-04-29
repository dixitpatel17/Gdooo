import React from 'react';

function myProfile() {
  return (
    <div className='main'>
      <div className='container'>
        <div className=' flex flex-row pt-[54px]'>
          <div className='w-fit  pl-5 pb-[14px]'>
            <button className='bg-[#B5A7F4]  size-10 top-[54px] left-[20px] rounded-full grid justify-center items-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className='w-full grid justify-center items-center mr-12'>
            <h1 className=' text-[#090B0A] pb-[22px]'>My Profile</h1>
          </div>
        </div>

        <div className='grid gap-[16px] pl-[18px] pr-[22px]'>
          <button className='shadow bg-[#9F8CF0] rounded-xl flex flex-row items-center p-[12px] justify-between'>
            <div className='flex flex-row gap-[12px] justify-center items-center '>
              <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#BFB2F5" />
                  <path d="M36 25.5V23.2C36 22.0799 36 21.5198 35.782 21.092C35.5903 20.7157 35.2843 20.4097 34.908 20.218C34.4802 20 33.9201 20 32.8 20H21.2C20.0799 20 19.5198 20 19.092 20.218C18.7157 20.4097 18.4097 20.7157 18.218 21.092C18 21.5198 18 22.0799 18 23.2V32.8C18 33.9201 18 34.4802 18.218 34.908C18.4097 35.2843 18.7157 35.5903 19.092 35.782C19.5198 36 20.0799 36 21.2 36L32.8 36C33.9201 36 34.4802 36 34.908 35.782C35.2843 35.5903 35.5903 35.2843 35.782 34.908C36 34.4802 36 33.9201 36 32.8V30.5M31 28C31 27.5353 31 27.303 31.0384 27.1098C31.1962 26.3164 31.8164 25.6962 32.6098 25.5384C32.803 25.5 33.0353 25.5 33.5 25.5H35.5C35.9647 25.5 36.197 25.5 36.3902 25.5384C37.1836 25.6962 37.8038 26.3164 37.9616 27.1098C38 27.303 38 27.5353 38 28C38 28.4647 38 28.697 37.9616 28.8902C37.8038 29.6836 37.1836 30.3038 36.3902 30.4616C36.197 30.5 35.9647 30.5 35.5 30.5H33.5C33.0353 30.5 32.803 30.5 32.6098 30.4616C31.8164 30.3038 31.1962 29.6836 31.0384 28.8902C31 28.697 31 28.4647 31 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div >
                <p className='text-white font-semibold flex'>My Wallet</p>
                <p className='text-[#D1D1D1] text-sm'> Check or redeem Swettballs</p>
              </div>
            </div>
            <div className='self'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>

          <button className='shadow bg-[#9F8CF0] rounded-xl flex flex-row items-center p-[12px] justify-between'  >
            <div className='flex flex-row gap-[12px] justify-center items-center '>
              <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#BFB2F5" />
                  <path d="M26 24V23M26 28.5V27.5M26 33V32M21.2 20H34.8C35.9201 20 36.4802 20 36.908 20.218C37.2843 20.4097 37.5903 20.7157 37.782 21.092C38 21.5198 38 22.0799 38 23.2V24.5C36.067 24.5 34.5 26.067 34.5 28C34.5 29.933 36.067 31.5 38 31.5V32.8C38 33.9201 38 34.4802 37.782 34.908C37.5903 35.2843 37.2843 35.5903 36.908 35.782C36.4802 36 35.9201 36 34.8 36H21.2C20.0799 36 19.5198 36 19.092 35.782C18.7157 35.5903 18.4097 35.2843 18.218 34.908C18 34.4802 18 33.9201 18 32.8V31.5C19.933 31.5 21.5 29.933 21.5 28C21.5 26.067 19.933 24.5 18 24.5V23.2C18 22.0799 18 21.5198 18.218 21.092C18.4097 20.7157 18.7157 20.4097 19.092 20.218C19.5198 20 20.0799 20 21.2 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div >
                <p className='text-white font-semibold flex'>My Vouchers</p>
                <p className='text-[#D1D1D1] text-sm'>Available Vouchers</p>
              </div>
            </div>
            <div className='self'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>

          <button className='bg-[#9F8CF0] rounded-xl flex flex-row items-center p-[12px] justify-between'  >
            <div className='flex flex-row gap-[12px] justify-center items-center '>
              <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="12" fill="#BFB2F5" />
                  <path d="M25 26.5L27 28.5L31.5 24M35 37V23.8C35 22.1198 35 21.2798 34.673 20.638C34.3854 20.0735 33.9265 19.6146 33.362 19.327C32.7202 19 31.8802 19 30.2 19H25.8C24.1198 19 23.2798 19 22.638 19.327C22.0735 19.6146 21.6146 20.0735 21.327 20.638C21 21.2798 21 22.1198 21 23.8V37L28 33L35 37Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <div >
                <p className='text-white font-semibold flex'>Collections</p>
                <p className='text-[#D1D1D1] text-sm'>Your saved items</p>
              </div>
            </div>
            <div className='self'>
              
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default myProfile;
