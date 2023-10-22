import { ImgComparisonSlider } from '@img-comparison-slider/react';


export default function Compare(){
    return (
        <ImgComparisonSlider hover="hover">
          <figure slot="first" >
            <img style={{minWidth:'100%', minHeight:'100%'}}  src="https://remini.ai/_next/image?url=%2Fimages%2Fproduct-demo%2Fportrait%2Fface%3Dfalse-glow%3Dfalse-color%3Dfalse.webp&w=1440&q=100" />
            <figcaption>Before</figcaption>
          </figure>
          <figure slot="second" class="after">
            <img style={{minWidth:'100%', minHeight:'100%'}} slot="second" src="https://remini.ai/_next/image?url=%2Fimages%2Fproduct-demo%2Fportrait%2Fface%3Dtrue-glow%3Dtrue-color%3Dtrue.webp&w=1024&q=100" />
            <figcaption>After</figcaption>
          </figure>
        </ImgComparisonSlider>
      );

}