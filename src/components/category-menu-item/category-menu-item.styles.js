import styled from "styled-components";



// export const CategoryContainer = styled.div`
//    title {
//     color: #323358;
//     text-align: center;
//     font-family: "Cormorant Garamond", serif;
//     font-size: 20px;
//    }

//    p {
//     font-family: "Poppins", sans-serif;
//     font-size: 12px;
//     line-height: 2;
//     color: steelblue;
//     text-align: center;
//     border-radius: 4px;
//    }
// `

export const ProjectCardStyles = styled.div`


position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
max-width: 1500px;
list-style-type: none;
`

export const Card = styled.div`
 
    position: relative;
    width: 200px; 
    height: 200px;
    margin: 10px;
    overflow: hidden;
    border: 2px;
    border-radius: 300px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        transition: transform 0.5s ease-in-out;
        transform-origin: right;
        transition-delay: 0.5s;
    }
    `

export const Image = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
  background-image: radial-gradient(azure, rgb(58, 55, 64));
  opacity: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: 1px;

   h5 {
    text-align: center;
    font-size: 20px;
    margin: 20px;
   }
`  

export const Content = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;

p {
    color:#98ABC3;
}
`
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    // width: 100%;
    // list-style-type: none;
  
//   card {
//     position: relative;
//     width: 320px;
//     height: 320px;
//     margin: 20px;
//     overflow: hidden;
//     border-radius: 300px;
//   }
//   .container .card .imgW,
//   .container .card .contentW,
//   .container .card .imgS,
//   .container .card .contentS,
//   .container .card .imgC,
//   .container .card .contentC {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
  
//    card, imgW 
// //   .container .card .imgS, 
// //   .container .card .imgC {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     background-image: radial-gradient(azure, rgb(58, 55, 64));
//     opacity: 35%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.3em;
//     text-transform: uppercase;
//     letter-spacing: 1px;
//   }
  
//   .dark-mode-theme, .container .card .imgW {
//     background-image: radial-gradient(azure, rgb(58, 55, 64));
//   }
//   .dark-mode-theme, .container .card .imgS {
//     background-image: radial-gradient(azure, rgb(58, 55, 64));
//   }
//   .dark-mode-theme, .container .card .imgC {
//     background-image: radial-gradient(azure, rgb(58, 55, 64));
//   }
  
//   .container .card .contentW::before,
//   .container .card .contentS::before,
//   .container .card .contentC::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     transform: scaleX(0);
//     transition: transform 0.5s ease-in-out;
//     transform-origin: right;
//     transition-delay: 0.5s;
//   }
  
//   .container .card:hover .contentW::before,
//   .container .card:hover .contentS::before,
//   .container .card:hover .contentC::before {
//     transform: scale(1);
//     transition: transform 0.5s ease-in-out;
//     transform-origin: left;
//     background-color: var(--image-text-color);
//   }
//   .container .card .contentW,
//   .container .card .contentS,
//   .container .card .contentC {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .container .card .contentW p,
//   .container .card .contentS p,
//   .container .card .contentC p {
//     color:#98ABC3;
//   }
//   .container .card .contentW .content,
//   .container .card .contentS .content,
//   .container .card .contentC .content {
//     position: relative;
//     padding: 30px;
//     z-index: 1;
//     transition: 0.5s;
//     transform: translateX(-300px);
//     transition-delay: 0s;
//   }
//   .container .card:hover .contentW .content,
//   .container .card:hover .contentS .content,
//   .container .card:hover .contentC .content {
//     transform: translateX(0px);
//     transition-delay: 0.5s;
//   }
//   `