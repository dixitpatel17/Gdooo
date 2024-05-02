"use client"
import React from 'react'

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function home() {
    return (
        <div className='main'>
            <div className='container'>
                < div className='flex col justify-between pt-[76px]'>
                    <div className='text-[#090B0A] text-[28px] font-bold pl-5 pb-8'>
                        <h1>Aries, Welcome
                            <p> to Gdooo </p>
                        </h1>
                    </div>
                    <div className='pr-[19px]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="swiper flex flex-row">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={8}
                        slidesPerView={1.1}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        centeredSlides={true}
                        initialSlide={1}
                    >
                        <SwiperSlide>
                            <button>
                                <img src="/images/Banner.png" className='h-[139px] w-[354px]' alt="" />
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button>
                                <img src="/images/Banner.png" className='h-[139px] w-[354px]' alt="" />
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button>
                                <img src="/images/Banner.png" className='h-[139px] w-[354px]' alt="" />
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button>
                                <img src="/images/Banner.png" className='h-[139px] w-[354px]' alt="" />
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className=''>
                    <div className='flex justify-between pl-5 pr-5 pt-8' >
                        <div>
                            <button className='shadow rounded-xl bg-[#9F8CF0] px-4 py-4'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.2666 15.3333L27.6007 18L24.9333 15.3333M27.9268 17.3333C27.9752 16.8956 28 16.4507 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C19.7697 28 23.1334 26.2618 25.3333 23.5431M16 9.33333V16L20 18.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className='text-[12px] pt-3 text-[#090B0A] flex justify-center'>Check in</p>
                        </div>
                        <div className=''>
                            <button className='shadow rounded-xl bg-[#9F8CF0] px-4 py-4'>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6667 28V20.8C20.6667 20.0533 20.6667 19.6799 20.5214 19.3947C20.3935 19.1438 20.1896 18.9398 19.9387 18.812C19.6535 18.6667 19.2801 18.6667 18.5334 18.6667H14.8C14.0533 18.6667 13.6799 18.6667 13.3947 18.812C13.1438 18.9398 12.9398 19.1438 12.812 19.3947C12.6667 19.6799 12.6667 20.0533 12.6667 20.8V28M4.66669 9.33333C4.66669 11.5425 6.45755 13.3333 8.66669 13.3333C10.8758 13.3333 12.6667 11.5425 12.6667 9.33333C12.6667 11.5425 14.4575 13.3333 16.6667 13.3333C18.8758 13.3333 20.6667 11.5425 20.6667 9.33333C20.6667 11.5425 22.4575 13.3333 24.6667 13.3333C26.8758 13.3333 28.6667 11.5425 28.6667 9.33333M8.93335 28H24.4C25.8935 28 26.6402 28 27.2107 27.7094C27.7124 27.4537 28.1204 27.0457 28.376 26.544C28.6667 25.9735 28.6667 25.2268 28.6667 23.7333V8.26667C28.6667 6.77319 28.6667 6.02646 28.376 5.45603C28.1204 4.95426 27.7124 4.54631 27.2107 4.29065C26.6402 4 25.8935 4 24.4 4H8.93335C7.43988 4 6.69314 4 6.12271 4.29065C5.62095 4.54631 5.213 4.95426 4.95734 5.45603C4.66669 6.02646 4.66669 6.77319 4.66669 8.26667V23.7333C4.66669 25.2268 4.66669 25.9735 4.95734 26.544C5.213 27.0457 5.62095 27.4537 6.12271 27.7094C6.69314 28 7.43988 28 8.93335 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className='text-[12px] pt-3 text-[#090B0A] flex justify-center'>Shop Now</p>
                        </div>
                        <div>
                            <button className='shadow rounded-xl bg-[#9F8CF0] px-4 py-4'>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 12.6668V9.60016C27 8.10669 27 7.35996 26.7094 6.78952C26.4537 6.28776 26.0457 5.87981 25.544 5.62415C24.9735 5.3335 24.2268 5.3335 22.7333 5.3335H7.26667C5.77319 5.3335 5.02646 5.3335 4.45603 5.62415C3.95426 5.87981 3.54631 6.28776 3.29065 6.78952C3 7.35995 3 8.10669 3 9.60016V22.4002C3 23.8936 3 24.6404 3.29065 25.2108C3.54631 25.7126 3.95426 26.1205 4.45603 26.3762C5.02646 26.6668 5.77319 26.6668 7.26667 26.6668L22.7333 26.6668C24.2268 26.6668 24.9735 26.6668 25.544 26.3762C26.0457 26.1205 26.4537 25.7126 26.7094 25.2108C27 24.6404 27 23.8936 27 22.4002V19.3335M20.3333 16.0002C20.3333 15.3806 20.3333 15.0709 20.3846 14.8133C20.595 13.7554 21.4219 12.9285 22.4798 12.7181C22.7374 12.6668 23.0471 12.6668 23.6667 12.6668H26.3333C26.9529 12.6668 27.2626 12.6668 27.5202 12.7181C28.5781 12.9285 29.405 13.7554 29.6154 14.8133C29.6667 15.0709 29.6667 15.3806 29.6667 16.0002C29.6667 16.6197 29.6667 16.9295 29.6154 17.1871C29.405 18.2449 28.5781 19.0718 27.5202 19.2823C27.2626 19.3335 26.9529 19.3335 26.3333 19.3335H23.6667C23.0471 19.3335 22.7374 19.3335 22.4798 19.2823C21.4219 19.0718 20.595 18.2449 20.3846 17.1871C20.3333 16.9295 20.3333 16.6197 20.3333 16.0002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className='text-[12px] pt-3 text-[#090B0A] flex justify-center'>Wallet</p>
                        </div>
                        <div>
                            <button className='shadow rounded-xl bg-[#9F8CF0] px-4 py-4'>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.16669 13.3332H29.8334V10.9332C29.8334 9.4397 29.8334 8.69296 29.5427 8.12253C29.287 7.62077 28.8791 7.21282 28.3773 6.95716C27.8069 6.6665 27.0602 6.6665 25.5667 6.6665H7.43335C5.93988 6.6665 5.19314 6.6665 4.62271 6.95715C4.12095 7.21282 3.713 7.62076 3.45734 8.12253C3.16669 8.69296 3.16669 9.4397 3.16669 10.9332V21.0665C3.16669 22.56 3.16669 23.3067 3.45734 23.8771C3.713 24.3789 4.12095 24.7869 4.62271 25.0425C5.19314 25.3332 5.93988 25.3332 7.43335 25.3332H15.1667M19.8334 27.9998L22.5333 27.4598C22.7687 27.4128 22.8864 27.3892 22.9962 27.3462C23.0936 27.308 23.1862 27.2584 23.2721 27.1985C23.3688 27.1311 23.4537 27.0462 23.6234 26.8764L29.1667 21.3332C29.9031 20.5968 29.9031 19.4029 29.1667 18.6665C28.4303 17.9301 27.2364 17.9301 26.5 18.6665L20.9568 24.2098C20.787 24.3795 20.7021 24.4644 20.6347 24.5611C20.5748 24.647 20.5252 24.7396 20.487 24.837C20.444 24.9467 20.4204 25.0645 20.3733 25.2999L19.8334 27.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                            <p className='text-[12px] pt-3 text-[#090B0A] flex justify-center'>Membership</p>
                        </div>
                    </div>

                    <div className="px-[23px] py-[26px]">
                        <div className="abc gap-[19px] grid px-[26px] py-6 border-white border-[1px]  rounded-xl bg-black object-contain">
                            <div className="text-white justify-between flex ">
                                <p className="text-[17px] font-bold">Gdooo</p>
                                <p className="text-[12px]">Anti Matter</p>
                            </div>
                            <div className="text-white flex flex-row gap-6">
                                <img src="/images/profile.png " className=" rounded-[18px] h-[98px] w-[98px] " alt="" />
                                <div className="grid gap-[11px] justify-center">
                                    <div>
                                        <p className="font-bold text-[23px] ">Steph Golik</p>
                                    </div>
                                    <div>
                                        <p className="text-[12px] gap-1">ID No : 123456789</p>
                                        <p className="text-[12px] gap-1">Join : 08/08/2024</p>
                                        <p className="text-[12px] gap-1">Expire : 08/08/2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pl-5 pb-[90px]">
                        <div className="grid gap-4">
                            <p className="text-[20px] font-semibold">Visit Popup Store</p>
                            <div className="swiper flex flex-row gap-2 ">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={8}
                                    slidesPerView={2.2}
                                    initialSlide={1}
                                >
                                    <SwiperSlide> <img src="/images/Rectangle 22466.png " className='h-[120px] w-[167px]' ></img></SwiperSlide>
                                    <SwiperSlide><img src="/images/Rectangle 22467.png " className='h-[120px] w-[167px]'></img></SwiperSlide>
                                    <SwiperSlide><img src="/images/img-6.png" className='h-[120px] w-[167px] rounded-xl'></img></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <p className="text-[20px] font-semibold pt-4">Play Gacha</p>
                            <div className="swiper flex flex-row gap-2">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={8}
                                    slidesPerView={2.2}
                                    initialSlide={1}
                                >
                                    <SwiperSlide> <img src="/images/img-2.png " className='h-[120px] w-[167px]' ></img></SwiperSlide>
                                    <SwiperSlide><img src="/images/img-3.png " className='h-[120px] w-[167px]'></img></SwiperSlide>
                                    <SwiperSlide><img src="/images/img-7.png" className='h-[120px] w-[167px] rounded-xl'></img></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <p className="text-[20px] font-semibold pt-4">Latest Products</p>
                            <div className="swiper flex flex-row gap-2">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={8}
                                    slidesPerView={2.2}
                                    initialSlide={1}
                                >
                                    <SwiperSlide> <img src="/images/img-4.png" className='h-[120px] w-[167px]' ></img></SwiperSlide>
                                    <SwiperSlide><img src="/images/img-5.png" className='h-[120px] w-[167px]'></img></SwiperSlide>
                                    <SwiperSlide><img src="/images/img-8.png" className='h-[120px] w-[167px] rounded-xl'></img></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fixed bottom-0 min-w-[375px] z-50'>
                    <div className='flex justify-center relative '>
                        <button className='bg-black absolute w-[48px] h-[48px] rounded-full top-[-21px]'>
                            <div className='flex justify-center items-center'>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9V6C4 3.23858 6.23858 1 9 1C11.419 1 13.4367 2.71776 13.9 5M5.8 19H12.2C13.8802 19 14.7202 19 15.362 18.673C15.9265 18.3854 16.3854 17.9265 16.673 17.362C17 16.7202 17 15.8802 17 14.2V13.8C17 12.1198 17 11.2798 16.673 10.638C16.3854 10.0735 15.9265 9.6146 15.362 9.32698C14.7202 9 13.8802 9 12.2 9H5.8C4.11984 9 3.27976 9 2.63803 9.32698C2.07354 9.6146 1.6146 10.0735 1.32698 10.638C1 11.2798 1 12.1198 1 13.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="a bg-[#FD9318] SHA flex flex-row justify-around items-center rounded-t-[12px] pb-[34px]">
                        <div className="grid gap-1 justify-center pt-[11.5px]">
                            <button className=" flex justify-center items-center">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.83331 21.4997V14.0997C9.83331 13.5397 9.83331 13.2597 9.94231 13.0457C10.0382 12.8576 10.1912 12.7046 10.3793 12.6087C10.5932 12.4997 10.8733 12.4997 11.4333 12.4997H14.2333C14.7934 12.4997 15.0734 12.4997 15.2873 12.6087C15.4755 12.7046 15.6284 12.8576 15.7243 13.0457C15.8333 13.2597 15.8333 13.5397 15.8333 14.0997V21.4997M11.851 3.26375L5.0687 8.53888C4.61533 8.8915 4.38865 9.06781 4.22534 9.28861C4.08068 9.4842 3.97291 9.70454 3.90734 9.93881C3.83331 10.2033 3.83331 10.4905 3.83331 11.0648V18.2997C3.83331 19.4198 3.83331 19.9799 4.0513 20.4077C4.24305 20.784 4.54901 21.09 4.92533 21.2818C5.35316 21.4997 5.91321 21.4997 7.03331 21.4997H18.6333C19.7534 21.4997 20.3135 21.4997 20.7413 21.2818C21.1176 21.09 21.4236 20.784 21.6153 20.4077C21.8333 19.9799 21.8333 19.4198 21.8333 18.2997V11.0648C21.8333 10.4905 21.8333 10.2033 21.7593 9.93881C21.6937 9.70454 21.5859 9.4842 21.4413 9.28861C21.278 9.06781 21.0513 8.8915 20.5979 8.53888L13.8156 3.26376C13.4643 2.9905 13.2886 2.85388 13.0947 2.80136C12.9235 2.75502 12.7431 2.75502 12.572 2.80136C12.378 2.85388 12.2023 2.9905 11.851 3.26375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className="text-center items-center text-[10px] text-white"> Home</p>
                        </div>
                        <div className="grid gap-1 justify-center pt-[15px]">
                            <button className="flex justify-center items-center ">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 19V13.6C13.5 13.0399 13.5 12.7599 13.391 12.546C13.2951 12.3578 13.1422 12.2049 12.954 12.109C12.7401 12 12.4601 12 11.9 12H9.1C8.53995 12 8.25992 12 8.04601 12.109C7.85785 12.2049 7.70487 12.3578 7.60899 12.546C7.5 12.7599 7.5 13.0399 7.5 13.6V19M1.5 5C1.5 6.65685 2.84315 8 4.5 8C6.15685 8 7.5 6.65685 7.5 5C7.5 6.65685 8.84315 8 10.5 8C12.1569 8 13.5 6.65685 13.5 5C13.5 6.65685 14.8431 8 16.5 8C18.1569 8 19.5 6.65685 19.5 5M4.7 19H16.3C17.4201 19 17.9802 19 18.408 18.782C18.7843 18.5903 19.0903 18.2843 19.282 17.908C19.5 17.4802 19.5 16.9201 19.5 15.8V4.2C19.5 3.0799 19.5 2.51984 19.282 2.09202C19.0903 1.71569 18.7843 1.40973 18.408 1.21799C17.9802 1 17.4201 1 16.3 1H4.7C3.5799 1 3.01984 1 2.59202 1.21799C2.21569 1.40973 1.90973 1.71569 1.71799 2.09202C1.5 2.51984 1.5 3.07989 1.5 4.2V15.8C1.5 16.9201 1.5 17.4802 1.71799 17.908C1.90973 18.2843 2.21569 18.5903 2.59202 18.782C3.01984 19 3.57989 19 4.7 19Z" stroke="#FECD95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className="text-center items-center text-[10px] text-[#FECD95]">Store</p>
                        </div>

                        <div className="grid gap-1 justify-center pt-[14px]">
                            <button className="flex justify-center items-center ">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1667 11H14.1667M16.1667 9V13M9.16667 12H9.15667M6.16667 10H6.15667M13.7177 5H10.6156C7.99074 5 6.6783 5 5.64813 5.49743C4.74112 5.9354 3.98752 6.63709 3.48604 7.51059C2.91648 8.5027 2.82297 9.81181 2.63596 12.43L2.38992 15.8745C2.26929 17.5634 3.60691 19 5.30013 19C6.16602 19 6.98718 18.6154 7.54151 17.9502L7.91667 17.5C8.25981 17.0882 8.43142 16.8823 8.62678 16.7159C9.03635 16.3672 9.53217 16.1349 10.0623 16.0436C10.3152 16 10.5832 16 11.1192 16H13.2141C13.7501 16 14.0182 16 14.271 16.0436C14.8012 16.1349 15.297 16.3672 15.7066 16.7159C15.9019 16.8823 16.0735 17.0882 16.4167 17.5L16.7918 17.9502C17.3462 18.6154 18.1673 19 19.0332 19C20.7264 19 22.0641 17.5634 21.9434 15.8745L21.6974 12.43C21.5104 9.81181 21.4169 8.5027 20.8473 7.51059C20.3458 6.63709 19.5922 5.9354 18.6852 5.49743C17.6551 5 16.3426 5 13.7177 5Z" stroke="#FECD95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className=" flex justify-center text-[10px] text-[#FECD95]">Mini Game</p>
                        </div>
                        <div className="grid gap-1 justify-center pt-[13.5px]">
                            <button className="flex justify-center items-center">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 21.5C20.5 20.1044 20.5 19.4067 20.3278 18.8389C19.94 17.5605 18.9395 16.56 17.6611 16.1722C17.0933 16 16.3956 16 15 16H10C8.60444 16 7.90665 16 7.33886 16.1722C6.06045 16.56 5.06004 17.5605 4.67224 18.8389C4.5 19.4067 4.5 20.1044 4.5 21.5M17 8C17 10.4853 14.9853 12.5 12.5 12.5C10.0147 12.5 8 10.4853 8 8C8 5.51472 10.0147 3.5 12.5 3.5C14.9853 3.5 17 5.51472 17 8Z" stroke="#FECD95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className=" flex justify-center text-[10px] text-[#FECD95] ">Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home;