import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-left: 40px;

  h1 {
    margin-bottom: 30px;
    font-size: 70px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`

export const ProjectItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;

  @media (max-width: 1024px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid #ccc;
  padding: 5px;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`

export const Image = styled.img`
  width: 100%;
  transition: transform 0.3s ease-in-out;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 8px;
`

export const IconContent = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 50px;
  padding: 5px;
  margin-top: 50px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`
