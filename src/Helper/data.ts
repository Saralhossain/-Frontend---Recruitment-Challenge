export type Item = {
    id: number;
    heading: string;
    img: string; // Assuming 'img' is a string representing the image source path
    owner: string;
    mint_address: string;
    token_address: string;
  };
  
export const array: Item[] = [
{
    id: 1,
    heading: 'Cyberlinx #2551',
    img: require('../images/img1.png'),
    owner: 'uV7wX3yZ2A4bC',
    mint_address: 'uV7wX3yZ2A4bC',
    token_address: 'uV7wX3yZ2A4bC',
},
{
    id: 2,
    heading: 'The Eyedeas #1029',
    img: require('../images/img2.png'),
    owner: 'uV7wX3yZ2A4bC',
    mint_address: 'uV7wX3yZ2A4bC',
    token_address: 'uV7wX3yZ2A4bC',
},
{
    id: 3,
    heading: 'Zombies #7919',
    img: require('../images/img3.png'),
    owner: 'uV7wX3yZ2A4bC',
    mint_address: 'uV7wX3yZ2A4bC',
    token_address: 'uV7wX3yZ2A4bC',
}
];
  