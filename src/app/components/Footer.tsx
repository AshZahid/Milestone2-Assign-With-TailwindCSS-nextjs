export default function Footer(){
    return(

        <footer className="text-center">
            <h1 className="text-xl text-rose-700">Since 2001, We have processed over 296,996,589 applications</h1>

            <h2 className="text-slate-700 sm:text-2xl">We work globally</h2>

            <div className="text-rose-700 flex gap-x-24 pl-5 sm:pl-80 sm:text-cemter">
            <p>3469</p>
             <p>153</p>
             <p>69</p>
             </div>

             
            <div className="flex gap-x-5 text-slate-700 pl-5 sm:pl-80 sm:text-center">
            <p>Application<br/>Centers</p>
             <p>Countries of<br/>Operation</p>
             <p>Client<br/>Governments</p>
             </div>
        </footer>
    )
}