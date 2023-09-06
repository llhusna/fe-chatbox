import React from 'react'
import bgavatar from 'assets/chatbox/bg-avatar.png'
import send from 'assets/chatbox/send.svg'
import background from 'assets/chatbox/background.png'
import avatar from 'assets/chatbox/avatar.png'
import top from 'assets/chatbox/top.svg'


const PageChatbox = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div></div>

        {/* avatar */}
        <div>
          <div className='relative flex justify-center '>
            <div className="z-10 relative">
              <img src={background} />
            </div>
            <div className="z-20 absolute pt-4">
              <div className='text-2xl font-semibold'>Hi sarah !</div>
            </div>
            <div className="z-20 absolute">
              <img src={top} />
            </div>
            <div className="z-20 absolute top-24">
              <img src={bgavatar} />
            </div>
            <div className="z-30 absolute top-16">
              <img src={avatar} />
            </div>
          </div>
        
        </div>

        {/* chatbox */}
        <div className='chat-container mx-20 min-1920px:mx-60 bg-[#D9D9D9] bg-opacity-5 max-h-[75%] min-[1600px]:max-h-[65%] text-satoshi -translate-y-10 relative'>
          <div className='chatbox-container ml-40 mr-20 my-10 text-md flex max-h-[60%] min-[1600px]:max-h-[68%] overflow-y-auto flex-col flex-grow'>
            {/* questions */}
            <div className='mr-20'>
            <div className="grid grid-cols-12">
              <div className='col-span-1'>
                <img src={bgavatar} className="w-8 h-8" />
              </div>
              <div className='col-span-11'>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
                </div>
                <div className='bg-[#2C2B33] px-6 pt-4 py-10 my-4 rounded-md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-6">
              <div className='col-span-1'>
                <img src={bgavatar} className="w-8 h-8" />
              </div>
              <div className='col-span-11'>
                <div>
                Boleh tolong bagi contoh ayat dalam satu perenggan dalam Bahasa Melayu ?
                </div>
                <div className='bg-[#2C2B33] px-6 pt-4 py-10 my-4 rounded-md'>
                Tentu! Di sini terdapat teks acak dalam Bahasa Melayu yang terdiri dari satu perenggan dengan sepuluh baris:

                Pagi tadi, langit dipenuhi awan putih yang lembut. Angin sejuk menerpa wajah, memberikan kesegaran kepada setiap yang terhembus. Di bawah pohon rindang, burung-burung berkicau riang. Sungai yang mengalir deras memberikan irama alami yang menenangkan hati. Sinar matahari perlahan muncul di ufuk timur, menyinari segalanya dengan kehangatan. Dalam hutan yang tenang, bunyi dedaunan yang berdesir menjadi tanda kedamaian. Tanaman-tanaman beraneka warna berkembang subur di taman itu.
              </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-6">
              <div className='col-span-1'>
                <img src={bgavatar} className="w-8 h-8" />
              </div>
              <div className='col-span-11'>
                <div>
                Boleh tolong bagi contoh ayat dalam satu perenggan dalam Bahasa Melayu ?
                </div>
                <div className='bg-[#2C2B33] px-6 pt-4 py-10 my-4 rounded-md'>
                Tentu! Di sini terdapat teks acak dalam Bahasa Melayu yang terdiri dari satu perenggan dengan sepuluh baris:

                Pagi tadi, langit dipenuhi awan putih yang lembut. Angin sejuk menerpa wajah, memberikan kesegaran kepada setiap yang terhembus. Di bawah pohon rindang, burung-burung berkicau riang. Sungai yang mengalir deras memberikan irama alami yang menenangkan hati. Sinar matahari perlahan muncul di ufuk timur, menyinari segalanya dengan kehangatan. Dalam hutan yang tenang, bunyi dedaunan yang berdesir menjadi tanda kedamaian. Tanaman-tanaman beraneka warna berkembang subur di taman itu.
              </div>
              </div>
            </div>

            </div>

          </div>
        </div>

        <div
              className="m-auto
                fixed
                inset-x-0
                bottom-20
                min-[1600px]:bottom-20
                h-14
                w-[60%]
                min-[1920px]:w-[40%]
                bg-none">               
                <div>
                <div className='flex items-center justify-between'>
                    <input 
                        className="appearance-none border rounded-lg py-2 px-3 text-sm text-gray-700 focus:outline-none focus:shadow-outline w-full h-14" 
                        id="input" type="text"
                        placeholder='Start the conversation'
                    /*    disabled = {isSubmitting}
                        {...register('username')} */
                      />
                      {/* {errors.username?.message && <div className='text-red-600'>{errors.username?.message}</div>} */}
                      <div
                        className="pl-2 pr-3 absolute inset-y-0 right-0 flex items-center cursor-pointer"
                        >
                        <img src={send} />
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default PageChatbox