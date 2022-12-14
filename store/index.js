import { v4 as uuidv4 } from 'uuid';
export const state = () => ({
    windowWidth: '',
    AllMusicList: [
        {
            name: "Hope",
            singer: "Mark Eliyahu",
            id: uuidv4(),
            cover: "/musics/Hope.jpg",
            address: "https://dl.songsara.net/FRE/2021/2/Mark%20Eliyahu%20-%20Hope%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Sunset",
            singer: "Waimis",
            id: uuidv4(),
            cover: "/musics/Sunset.jpg",
            address: "https://dl.songsara.net/FRE/2021/7/Waimis%20-%20Sunset%20(2020)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Saeng You",
            singer: "DayFox",
            id: uuidv4(),
            cover: "/musics/Saeng_You.jpg",
            address: "https://dl.songsara.net/FRE/2021/7/DayFox%20-%20Saeng%20You%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "You",
            singer: "Approaching Nirvana",
            id: uuidv4(),
            cover: "/musics/You.jpg",
            address: "https://dl.songsara.net/FRE/2021/7/Approaching%20Nirvana%20-%20You%20(2021%20Edit)%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Ocean Blue",
            singer: "InRp",
            id: uuidv4(),
            cover: "/musics/Ocean_Blue.jpg",
            address: "https://dl.songsara.net/FRE/2021/6/InRp%20-%20Ocean%20Blue%20(2021)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Distraction",
            singer: "Hossein Khezri",
            id: uuidv4(),
            cover: "/musics/Distraction.jpg",
            address: "https://dl.songsara.net/FRE/2021/1/Hossein%20Khezri%20-%20Distraction%20(2020)%20SONGSARA.NET.mp3"
        }
        ,
        {
            name: "Secret to Happiness",
            singer: "Jayjen",
            id: uuidv4(),
            cover: "/musics/Secret_to_Happiness.jpg",
            address: "https://dl.songsara.net/FRE/2021/5/Jayjen%20-%20Secret%20to%20Happiness%20(2020)%20SONGSARA.NET.mp3"
        },
        {
            name: "Hey",
            singer: "Various Artists",
            id: uuidv4(),
            cover: "/musics/Hey.jpg",
            address: "https://dl.songsara.net/FRE/2021/7/Hello%20Hello%20(Playlist)/01%20Hey.mp3"
        }
    ],
    currentSong: {
        name: "",
        singer: "",
        id: "",
        cover: "",
        address: ""
    }

});
export const getters = {
    getAllMusicList(state) {
        return state.AllMusicList;
    },
    getWidth(state) {
        return state.windowWidth;
    },
    getCurrentSong(state){
        return state.currentSong;
    }
};
export const mutations = {
    changeWidth(state, newWidth) {
        state.windowWidth = newWidth;
    },
    changeCurrentSong(state, current){
        state.currentSong=current
    }
}