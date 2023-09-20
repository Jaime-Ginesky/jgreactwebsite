import styled from 'styled-components';

export const Box = styled.div`

padding: 80 px 60px;
   position: absolute;
   bottom: 100px;
   top: 500px;
   width: 100%;
   margin: 0;

   @media (max-width: 1000px) {
    padding: 70px 30px;
   }
`

export const ProjectContainer = styled.div`

  display: grid:
  grid-template-columns: 1fr 1fr;
  align-content: center;
  height:300px;
  margin: 10px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 0 auto;
 width: 100%;
`

// export const ContainerCard = styled.div`
// position: relative;
// width: 320px;
// height: 320px;
// margin: 20px;
// overflow: hidden;
// border-radius: 300px;

//   imgW, imgS, imgC, contentW, contentS, contentC {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
//   imgW, imgS, imgC {
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
// `