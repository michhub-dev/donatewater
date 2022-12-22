export default function Motto(){
    return (
        <>
            <div className="relative flex-1 flex-wrap flex md:flex-col items-center ">
                <img 
                  className="sm:w-[380px] h-[208px] justify-center md:w-screen md:h-auto"
                  src="images/front-img.png" alt="main-image-for-motto"

                  />
                <div className="absolute  md:w-1/3 md:justify-items-start top-1 mt-8 sm:w-2/3 p-7  " id="md-img">
                    <h1
                      className="font-bold text-xl"
                    >
                   <span className="text-[#cd0046]" id="dw-title">Donate</span><span className="text-[#2c92d5]" id="dw-title">Water</span></h1>
                    <p className="text-white text-lg " id="dw-p">
                        Assessing Women's Vulnerability To Climate Change Effects On Natural Resources
                    </p>
                </div>
              
            </div>
        </>
    )
}