import { v4 as uuidv4 } from 'uuid';
export const state = () => ({
    windowWidth: '',
    AllMusicList: [
        {
            name: "Hope",
            singer: "Mark Eliyahu",
            id: uuidv4(),
            cover: "/musics/Hope.jpg",
            address: "/musics/Hope.mp3"
        }
        ,
        {
            name: "Sunset",
            singer: "Waimis",
            id: uuidv4(),
            cover: "/musics/Sunset.jpg",
            address: "/musics/Sunset.mp3"
        }
        ,
        {
            name: "Saeng You",
            singer: "DayFox",
            id: uuidv4(),
            cover: "/musics/Saeng_You.jpg",
            address: "/musics/Saeng_You.mp3"
        }
        ,
        {
            name: "You",
            singer: "Approaching Nirvana",
            id: uuidv4(),
            cover: "/musics/You.jpg",
            address: "/musics/You.mp3"
        }
        ,
        {
            name: "Ocean Blue",
            singer: "InRp",
            id: uuidv4(),
            cover: "/musics/Ocean_Blue.jpg",
            address: "/musics/Ocean_Blue.mp3"
        }
        ,
        {
            name: "Distraction",
            singer: "Hossein Khezri",
            id: uuidv4(),
            cover: "/musics/Distraction.jpg",
            address: "/musics/Distraction.mp3"
        }
        ,
        {
            name: "Secret to Happiness",
            singer: "Jayjen",
            id: uuidv4(),
            cover: "/musics/Secret_to_Happiness.jpg",
            address: "/musics/Secret_to_Happiness.mp3"
        },
        {
            name: "Hey",
            singer: "Various Artists",
            id: uuidv4(),
            cover: "/musics/Hey.jpg",
            address: "/musics/Hey.mp3"
        }
    ],
    currentSong: {
        name: "",
        singer: "",
        id: "",
        cover: "",
        address: ""
    },
    songHandler:false

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
    },
    getSongHandler(state){
        return state.songHandler;
    }
};
export const mutations = {
    changeWidth(state, newWidth) {
        state.windowWidth = newWidth;
    },
    changeCurrentSong(state, current){
        state.currentSong=current
    },
    changeSongHndler(state,newVal){
        state.songHandler=newVal;
    }
}