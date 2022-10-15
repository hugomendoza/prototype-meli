import { BsChevronRight } from "react-icons/bs";

export const Breadcrumb = (categories:any) => {

  const filterCats = categories.categories?.slice(0,5);
  
  return (
    <>
      <ul className="breadcrumb flex">
        {
          filterCats?.map((cat: string, index:number) => (
            <li
              className="breadcrumb__item flex"
              key={index}
            >
              {cat}
            <BsChevronRight /></li>
          ))
        }
      </ul>
    </>
  )
}