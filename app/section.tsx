'use client'
import Image from "next/image";
import divider from '../public/images/pattern-divider-desktop.svg';
import dividerMobile from '../public/images/pattern-divider-mobile.svg';
import { useEffect, useState } from "react";
import { any } from "promise";

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

export default function SectionBible( {verses}:any) {

 const [verseNo, setVerseNo] = useState(-1);
 const [isChanged, setIsChanged] = useState(true);
 const handleClick = (event: { preventDefault: () => void; }) => {  
  setIsChanged(!isChanged);
 }
 useEffect(() =>{
  setVerseNo(getRandomInt(verses.length));
  //setIsChanged(!isChanged);
 }, [isChanged])
 

//const verseNo:number = getRandomInt(verses.length);
//  verse = verses[verseNo];
// return verse;
 

const verse = verses[verseNo];
       if (verseNo===-1) return (
        <div className="advice-field z-10 w-11/12 md:w-3/5 lg:w-2/5 place-self-center rounded-2xl my-auto">
            <p className="advice-title m-5 md:m-8 mt-14 md:mt-9 uppercase text-center tracking-[0.3em] text-sm" >Loading advice...</p>
        </div>
    )

    return (
      <div className="advice-field z-10 w-11/12 md:w-3/5 lg:w-2/5 place-self-center rounded-2xl my-auto">    
          <p className="advice-title m-5 md:m-8 mt-14 md:mt-9 text-center tracking-[0.2em] text-lg" >
             {verse.book_name} {verse.chapter}:{verse.verse}
          </p>
          <p className="advice-body m-5 md:m-7 text-center text-2xl md:text-4xl font-extrabold tracking-wider md:tracking-normal">
            {verse.text}
          </p>
          <Image
            className="hidden md:block mx-auto w-4/5"
            priority
            src={divider} 
            alt="Divider" />
          <Image
            className="block md:hidden mx-auto w-4/5"
            priority
            src={dividerMobile} 
            alt="Divider" />
          <p className="mt-9"></p>
          <button
            onClick={handleClick}
            className="buttonBg block rounded-2xl border border-black w-24 uppercase h-14 mx-auto -mb-7 font-extrabold" type="submit"
          >
            Daily verse
          </button>
      </div>       
    )
    
  } 

  