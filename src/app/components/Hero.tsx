import Link from "next/link";

export default function Hero(){
    return(
        <div className="ml-28 mt-24">

            <div className="bg-[url('/images/image_1.jpeg')] max-w-{100%} bg-center bg-no-repeat"
        style={{backgroundSize: "100%"}}
            
            
            >

            <h2 className="text-rose-700 text-4xl text-left sm:text-center">WE HELP FOR VISA</h2>

            <h1 className="text-slate-700 text-4xl text-left sm:text-center sm:text-6xl">Best Immigration And <br/> Visa Consultations</h1>
            <br/>
            <p className="text-left sm:text-center text-rose-700">Our business consulting providind actionable recommend <br/> to force enterprise transformation</p>

              <Link href="/services">
             <button className="bg-rose-700 py-2 px-7 rounded m-5 ml-5 sm:ml-[150px]">Learn More</button>
             </Link>
            <button className="text-rose-700 rounded m-5 py-2 px-7 bg-slate-700 ml-8 sm:ml-[170px]">How We Work</button>
        
        <hr />
        </div>
        </div>
        
    );
};