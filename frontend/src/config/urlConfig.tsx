export const api = 'https://sovir.herokuapp.com/api';

export const generatePublicUrl = (fileName: string): string => {
    return `https://sovir.herokuapp.com/uploads/${fileName}`;
}