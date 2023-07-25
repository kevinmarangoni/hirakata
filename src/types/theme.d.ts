export interface ITheme {
    background:{
        primary: '#222831' | '#ffffff' | string,
        secondary: '#393E46' | '#F6F5F7'| string,
    } ,
    highlight: '#00ADB5' | '#FF6B6B'| string,
    font: '#EEEEEE' | '#333333'| string,
}
export interface IGlobalStyleProps {
    theme: ITheme;
  }
