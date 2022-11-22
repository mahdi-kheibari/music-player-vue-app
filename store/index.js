import { v4 as uuidv4 } from 'uuid';
export const state = () => ({
    AllMusicList: [
        {
            name: "Hope",
            signer: "Mark Eliyahu",
            id: uuidv4(),
            cover: "https://songsara.net/wp-content/uploads/2021/02/Mark-Eliyahu-Hope-400x400.jpg",
            address: "https://dl.songsara.net/FRE/2021/2/Mark%20Eliyahu%20-%20Hope%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Sunset",
            signer: "Waimis",
            id: uuidv4(),
            cover: "https://songsara.net/wp-content/uploads/2021/06/Waimis-Sunset-400x400.jpg",
            address: "https://dl.songsara.net/FRE/2021/7/Waimis%20-%20Sunset%20(2020)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Saeng You",
            signer: "DayFox",
            id: uuidv4(),
            cover: "https://songsara.net/wp-content/uploads/2021/06/DayFox-Saeng-You-400x400.jpg",
            address: "https://dl.songsara.net/FRE/2021/7/DayFox%20-%20Saeng%20You%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "You",
            signer: "Approaching Nirvana",
            id: uuidv4(),
            cover: "https://songsara.net/wp-content/uploads/2021/06/Approaching-Nirvana-You-2021-Edit-400x400.jpg",
            address: "https://dl.songsara.net/FRE/2021/7/Approaching%20Nirvana%20-%20You%20(2021%20Edit)%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Ocean Blue",
            signer: "InRp",
            id: uuidv4(),
            cover: "https://songsara.net/wp-content/uploads/2021/05/InRp-Ocean-Blue-400x400.jpg",
            address: "https://dl.songsara.net/FRE/2021/6/InRp%20-%20Ocean%20Blue%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Distraction",
            signer: "Hossein Khezri",
            id: uuidv4(),
            cover: "https://songsara.net/wp-content/uploads/2021/01/distraction_posterfix-400x400.jpg",
            address: "https://dl.songsara.net/FRE/2021/1/Hossein%20Khezri%20-%20Distraction%20(2020)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Secret to Happiness",
            signer: "Jayjen",
            id: uuidv4(),
            cover: "https://songsara.net/wp-content/uploads/2021/05/Jayjen-Secret-to-Happiness-400x400.jpg",
            address: "https://dl.songsara.net/FRE/2021/5/Jayjen%20-%20Secret%20to%20Happiness%20(2020)%20SONGSARA.NET.mp3"
        }
    ],

});
export const getters = {
    AllMusicList(state) {
        return state.AllMusicList;
    }
};
export const mutations = {

}