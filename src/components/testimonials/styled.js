import styled from 'styled-components'

const Testimonials = styled.div`
  width: 100%;
  position: relative;
  margin: 0% 0;
`

const Title = styled.h3`
  display: flex;
  flex: 1;
  justify-content: center;
  text-transform: uppercase;
  margin: 20px 0 0 0;

  @media (max-width: 700px) {
    margin: 20px 0 20px 0;
  }
`

const Carousel = styled.div`
  min-height: 10vh;
  position: relative;
  margin: 30px 0;
`

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Slide = styled.div`
  width: ${props => (props.visible ? '100%' : 0)};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.2s ease-in;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 100%;

  flex: space-between;
  flex-wrap: wrap;

  & > div {
    flex: 1;
  }
`

const SlideSelection = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 60px 0;
`

const SlideSelector = styled.div`
  width: 30px;
  height: 5px;
  margin: 0 4px;
  background-color: ${props =>
    props.selected ? 'rgb(199, 0, 43, 1)' : 'grey'};

  cursor: ${$ => ($.selected ? 'cursor' : 'pointer')};
  z-index: 1;
  transition: color 1s ease-in;
`

const Testimonial = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: minmax(100px, 1fr) auto;

  & > div {
    :first-child {
      grid-row: span 2;
    }

    :last-child {
      grid-row: span 2;
    }

    :nth-child(2) {
      grid-column: span 3;
    }

    :nth-child(4) {
      grid-column: span 3;
      display: flex;
      align-items: center;
    }
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;

  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 700px) {
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
  }
`

const Profile = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-right: 1px solid #ccc;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  height: 10px;
  justify-content: center;

  & > div {
    :first-child{
      grid-columnL span 2;
    }
    flex: 1;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    margin: 10px 0 35px 0;
    border: none;
  }
`

const ProfileDetails = styled.div`
  display: flex;
  white-space: nowrap;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0px 8px;
  }
`

const Review = styled.div`
  @media (max-width: 700px) {
    text-align: center;
  }
`

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    display: none;
    flex-direction: none;
  }
`

const MobileContainer = styled.div`
  display: none;
  flex-direction: column;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: flex;
  }
`

export {
  Testimonials,
  Title,
  Carousel,
  Slide,
  SlideSelection,
  SlideSelector,
  Testimonial,
  Image,
  Content,
  Details,
  Review,
  Profile,
  ProfileDetails,
  TestimonialContainer,
  DesktopContainer,
  MobileContainer,
}
