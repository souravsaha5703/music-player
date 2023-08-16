const music=new Audio();
// music.play();
const songs=[
    {
        id:1,
        songName:'Baarish',
        songArtist:'Mitraz',
        poster:'posters/mitraz.jpg',
        songsrc:'musics/1.mp3'
    },
    {
        id:2,
        songName:'Zehen',
        songArtist:'Mitraz',
        poster:'posters/zehen.jpeg',
        songsrc:'musics/2.mp3'
    },
    {
        id:3,
        songName:'Aaoge Tum Kanhi',
        songArtist:'The local Train',
        poster:'posters/choo lo.jpeg',
        songsrc:'musics/3.mp3'
    },
    {
        id:4,
        songName:'Akhiyaan',
        songArtist:'Mitraz',
        poster:'posters/akhinyaa.jpeg',
        songsrc:'musics/4.mp3'
    },
    {
        id:5,
        songName:'Alag Aasmaan',
        songArtist:'Anuv Jain',
        poster:'posters/alag asmaan.jpeg',
        songsrc:'musics/5.mp3'
    },
    {
        id:6,
        songName:'Alfaazo',
        songArtist:'Mitraz',
        poster:'posters/alfaazo.jpeg',
        songsrc:'musics/6.mp3'
    },
    {
        id:7,
        songName:'Baarishein',
        songArtist:'Anuv jain',
        poster:'posters/baarishen.jpeg',
        songsrc:'musics/7.mp3'
    },
    {
        id:8,
        songName:'Baazigar',
        songArtist:'Divine',
        poster:'posters/baazigar.jpeg',
        songsrc:'musics/8.mp3'
    },
    {
        id:9,
        songName:'Badtamiz Dil',
        songArtist:'Benny',
        poster:'posters/illahi.jpeg',
        songsrc:'musics/9.mp3'
    },
    {
        id:10,
        songName:'Cheques',
        songArtist:'Subh',
        poster:'posters/cheques.jpg',
        songsrc:'musics/10.mp3'
    },
    {
        id:11,
        songName:'Choo Lo',
        songArtist:'The Local Train',
        poster:'posters/choo lo.jpeg',
        songsrc:'musics/11.mp3'
    },
    {
        id:12,
        songName:'Dil Diya Gallan',
        songArtist:'Atif Aslam',
        poster:'posters/dil diya gallan.jpeg',
        songsrc:'musics/12.mp3'
    },
    {
        id:13,
        songName:'Dil ke paas',
        songArtist:'Arijit Singh',
        poster:'posters/dil ke paas.jpeg',
        songsrc:'musics/13.mp3'
    },
    {
        id:14,
        songName:'Dil Nu',
        songArtist:'Ap Dhillon',
        poster:'posters/dil nu.jpeg',
        songsrc:'musics/14.mp3'
    },
    {
        id:15,
        songName:'Gul',
        songArtist:'Anuv Jain',
        poster:'posters/gul.jpeg',
        songsrc:'musics/15.mp3'
    },
    {
        id:16,
        songName:'Ik Kahani',
        songArtist:'Gajendra Varma',
        poster:'posters/ik kahani.jpeg',
        songsrc:'musics/16.mp3'
    },
    {
        id:17,
        songName:'Ilahi',
        songArtist:'Arijit Singh',
        poster:'posters/illahi.jpeg',
        songsrc:'musics/17.mp3'
    },
    {
        id:18,
        songName:'Insane',
        songArtist:'Ap dillon',
        poster:'posters/insane.jpeg',
        songsrc:'musics/18.mp3'
    },
    {
        id:19,
        songName:'Iraadey',
        songArtist:'Rovalrio',
        poster:'posters/iraadey.jpeg',
        songsrc:'musics/19.mp3'
    },
    {
        id:20,
        songName:'Kesariya',
        songArtist:'Arijit Singh',
        poster:'posters/kesariya.jpeg',
        songsrc:'musics/20.mp3'
    },
    {
        id:21,
        songName:'Khairiyat',
        songArtist:'Arijit Singh',
        poster:'posters/chichore.jpeg',
        songsrc:'musics/21.mp3'
    },
    {
        id:22,
        songName:'Maan Meri jaan',
        songArtist:'King',
        poster:'posters/maan meri jaan.jpeg',
        songsrc:'musics/22.mp3'
    },
    {
        id:23,
        songName:'Main Rahoon Ya ...',
        songArtist:'Arman Malik',
        poster:'posters/main rahoon ya na rahoon.jpeg',
        songsrc:'musics/23.mp3'
    },
    {
        id:24,
        songName:'Maula Mere Maula',
        songArtist:'Roop Kumar Rathood',
        poster:'posters/maula mere maula.jpeg',
        songsrc:'musics/24.mp3'
    },
    {
        id:25,
        songName:'Meet',
        songArtist:'Arijit Singh',
        poster:'posters/meet.jpeg',
        songsrc:'musics/25.mp3'
    },
    {
        id:26,
        songName:'Mera Mann Kehna Laga',
        songArtist:'Ayushman Khurana',
        poster:'posters/saddi galli.jpeg',
        songsrc:'musics/26.mp3'
    },
    {
        id:27,
        songName:'Mi amor',
        songArtist:'Sharn',
        poster:'posters/mi amor.jpeg',
        songsrc:'musics/27.mp3'
    },
    {
        id:28,
        songName:'Nadiyon sa',
        songArtist:'Mitraz',
        poster:'posters/mitraz.jpg',
        songsrc:'musics/28.mp3'
    },
    {
        id:29,
        songName:'No Love',
        songArtist:'Subh',
        poster:'posters/no love.jpeg',
        songsrc:'musics/29.mp3'
    },
    {
        id:30,
        songName:'Obsessed',
        songArtist:'Riar',
        poster:'posters/obsessed.jpeg',
        songsrc:'musics/30.mp3'
    },
    {
        id:31,
        songName:'Pani da rang',
        songArtist:'Ayushman Khurana',
        poster:'posters/pani da rang.jpeg',
        songsrc:'musics/31.mp3'
    },
    {
        id:32,
        songName:'Paniyoon Sa lofi',
        songArtist:'Atif Aslam',
        poster:'posters/paniyon sa.jpeg',
        songsrc:'musics/32.mp3'
    },
    {
        id:33,
        songName:'Pehli Dafa',
        songArtist:'Atif Aslam',
        poster:'posters/pehli dafa.jpeg',
        songsrc:'musics/33.mp3'
    },
    {
        id:34,
        songName:'Pyaar Hota',
        songArtist:'Arijit Singh',
        poster:'posters/pyaar hota hota.jpeg',
        songsrc:'musics/34.mp3'
    },
    {
        id:35,
        songName:'Raanjhanaa',
        songArtist:'AR Rahaman',
        poster:'posters/raanjhanaa.jpeg',
        songsrc:'musics/35.mp3'
    },
    {
        id:36,
        songName:'Saadi Galli',
        songArtist:'Ayushman Khurana',
        poster:'posters/saddi galli.jpeg',
        songsrc:'musics/36.mp3'
    },
    {
        id:37,
        songName:'Shayad',
        songArtist:'Arijit Singh',
        poster:'posters/sayad.jpeg',
        songsrc:'musics/37.mp3'
    },
    {
        id:38,
        songName:'Spaceship',
        songArtist:'Ap dillon',
        poster:'posters/spaceship.jpeg',
        songsrc:'musics/38.mp3'
    },
    {
        id:39,
        songName:'Sun Maahi',
        songArtist:'Armaan Malik',
        poster:'posters/sun maahi.jpeg',
        songsrc:'musics/39.mp3'
    },
    {
        id:40,
        songName:'Tere Vaaste',
        songArtist:'Varun Jain',
        poster:'posters/tere vaste.jpeg',
        songsrc:'musics/40.mp3'
    },
    {
        id:41,
        songName:'True Stories',
        songArtist:'Ap dillon',
        poster:'posters/true stories.jpeg',
        songsrc:'musics/41.mp3'
    },
    {
        id:42,
        songName:'Tu Aake Dhekle',
        songArtist:'King',
        poster:'posters/tu ake dhek le.jpeg',
        songsrc:'musics/42.mp3'
    },
    {
        id:43,
        songName:'Tum se hi',
        songArtist:'Mohit Chauhan',
        poster:'posters/tum se hi.jpeg',
        songsrc:'musics/43.mp3'
    },
    {
        id:44,
        songName:'We Rollin',
        songArtist:'Subh',
        poster:'posters/we rollin.jpeg',
        songsrc:'musics/44.mp3'
    },
    {
        id:45,
        songName:'Your Eyes',
        songArtist:'unknown',
        poster:'posters/your eyes.jpeg',
        songsrc:'musics/45.mp3'
    },
    {
        id:46,
        songName:'Zara sa',
        songArtist:'KK',
        poster:"posters/zara sa.jpeg",
        songsrc:'musics/46.mp3'
    }
];
let index=0;
let poster_master=document.getElementById('poster-master');
let stitle=document.getElementById('stitle');
let subtitle=document.getElementById('subtitle');

Array.from(document.getElementsByClassName('songItem')).forEach((song,i)=>{
    song.getElementsByTagName('img')[0].src=songs[i].poster;
    song.getElementsByTagName('h1')[0].innerText=songs[i].songName;
    song.getElementsByTagName('h4')[0].innerText=songs[i].songArtist;
    song.addEventListener('click',(e)=>{
        index=e.target.id;
        music.src=songs[index-1].songsrc;
        music.play();
    });

    // song.addEventListener('click',(e)=>{
    //     index=e.target.id;
    //     music.src=`musics/${index}.mp3`;
    //     poster_master.src=`posters/${index}.jpeg`;
    //     music.play();
    // })
});
// Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         index=e.target.id;
//         music.src=songs[index].songsrc;
//         music.play();
//     })
// })

let master_play=document.getElementById('master-play');
let playicon=document.getElementById('play');
playicon.addEventListener('click',()=>{
    if(music.pause || music.currentTime>=0){
        music.play();
        playicon.classList.remove('bi-play-fill');
        playicon.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        playicon.classList.remove('bi-pause-fill');
        playicon.classList.add('bi-play-fill');
    }
});


// let index=0;
// let poster_master_play=document.getElementById('poster_master_play');
// let title=document.getElementById('title');
// Array.from(document.getElementsByClassName('playlist-play')).forEach((e)=>{
//     e.addEventListener('click',(element)=>{
//         index= element.target.id;
//         music.src=`audio/${index}.mp3`;
//         poster_master_play.src=`img/${index}.jpg`;
//         music.play();
//         masterPlay.classList.remove('bi-play-fill');
//         masterPlay.classList.add('bi-pause-fill');

//         let songTitles=songs.filter((el)=>{
//             return el.id==index;
//         });
//         songTitles.forEach(ele=>{
//             let{songName}=ele;
//             title.innerHTML=songName;

//         });
//         makeAllBackground();
//         Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';
//         makeAllPlays();
//         element.target.classList.remove('bi-pause-fill');
//         element.target.classList.add('bi-play-fill');
//         wave.classList.add('active1');
//     });
// });