import PageTemplate, { generateMetadata } from './[slug]/page'


export default function Test() {

  return <>
  <div className={` h-svh flex flex-col   `}>
    <div className={`grow  flex items-center justify-center`}>
      <div className={`text-3xl animate-bounce`}>
        🦀
      </div>   <div className={`text-3xl animate-bounce delay-100`}>
        🦀
      </div>   <div className={`text-3xl animate-bounce delay-200`}>
        🦀
      </div>
    </div>
    <footer className={` mb-8 text-center `}>
      Coming soon...
    </footer>

  </div>
  </>
}


// export default PageTemplate
//
// export { generateMetadata }
