import React from "react";
import CardFeaturedCategories from "../CardFeaturedCategories/CardFeaturedCategories";
import stl from "./FeaturedCategories.module.css";
import { getCategories } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function FeaturedCategories() {
  const category = useSelector((state)=> state.category)
  const dispatch = useDispatch()


  useEffect(()=>{
    !category.length && dispatch(getCategories())
  },[])
  
  return (      
        <div className={stl.container}>
          <section className={stl.section}>
          {category?.slice(0,4).map((e, i) => (
            <div key={i}>
              <CardFeaturedCategories prop={e} />
            </div>
          ))}
          </section>
          <section className={stl.section}>

          {category?.slice(4,8).map((e, i) => (
            <div key={i}>
              <CardFeaturedCategories prop={e} />
            </div>
          ))}
          </section>
          <section className={stl.section}>

          {category?.slice(8,12).map((e, i) => (
            <div key={i}>
              <CardFeaturedCategories prop={e} />
            </div>
          ))}
          </section>
        </div>
  );
}
