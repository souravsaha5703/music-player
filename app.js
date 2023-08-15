const music=new Audio('musics/2Zehen - Zehen.mp3');
// music.play();
const songs=[
    {
        id:1,
        songName:'Baarish',
        songArtist:'Mitraz',
        poster:'posters/mitraz.jpg'
    },
    {
        id:2,
        songName:'Zehen',
        songArtist:'Mitraz',
        poster:'posters/zehen.jpeg'
    },
    {
        id:3,
        songName:'Aaoge Tum Kanhi',
        songArtist:'The local Train',
        poster:'posters/choo lo.jpeg'
    },
    {
        id:4,
        songName:'Akhiyaan',
        songArtist:'Mitraz',
        poster:'posters/akhinyaa.jpeg'
    },
    {
        id:5,
        songName:'Alag Aasmaan',
        songArtist:'Anuv Jain',
        poster:'posters/alag asmaan.jpeg'
    },
    {
        id:6,
        songName:'Alfaazo',
        songArtist:'Mitraz',
        poster:'posters/alfaazo.jpeg'
    },
    {
        id:7,
        songName:'Baarishein',
        songArtist:'Anuv jain',
        poster:'posters/baarishen.jpeg'
    },
    {
        id:8,
        songName:'Baazigar',
        songArtist:'Divine',
        poster:'posters/baazigar.jpeg'
    },
    {
        id:9,
        songName:'Badtamiz Dil',
        songArtist:'Benny',
        poster:'posters/illahi.jpeg'
    },
    {
        id:10,
        songName:'Cheques',
        songArtist:'Subh',
        poster:'posters/cheques.jpg'
    },
    {
        id:11,
        songName:'Choo Lo',
        songArtist:'The Local Train',
        poster:'posters/choo lo.jpeg'
    },
    {
        id:12,
        songName:'Dil Diya Gallan',
        songArtist:'Atif Aslam',
        poster:'posters/dil diya gallan.jpeg'
    },
    {
        id:13,
        songName:'Dil ke paas',
        songArtist:'Arijit Singh',
        poster:'posters/dil ke paas.jpeg'
    },
    {
        id:14,
        songName:'Dil Nu',
        songArtist:'Ap Dhillon',
        poster:'posters/dil nu.jpeg'
    },
    {
        id:15,
        songName:'Gul',
        songArtist:'Anuv Jain',
        poster:'posters/gul.jpeg'
    },
    {
        id:16,
        songName:'Ik Kahani',
        songArtist:'Gajendra Varma',
        poster:'posters/ik kahani.jpeg'
    },
    {
        id:17,
        songName:'Ilahi',
        songArtist:'Arijit Singh',
        poster:'posters/illahi.jpeg'
    },
    {
        id:18,
        songName:'Insane',
        songArtist:'Ap dillon',
        poster:'posters/insane.jpeg'
    },
    {
        id:19,
        songName:'Iraadey',
        songArtist:'Rovalrio',
        poster:'posters/iraadey.jpeg'
    },
    {
        id:20,
        songName:'Kesariya',
        songArtist:'Arijit Singh',
        poster:'posters/kesariya.jpeg'
    },
    {
        id:21,
        songName:'Khairiyat',
        songArtist:'Arijit Singh',
        poster:'posters/chichore.jpeg'
    },
    {
        id:22,
        songName:'Maan Meri jaan',
        songArtist:'King',
        poster:'posters/maan meri jaan.jpeg'
    },
    {
        id:23,
        songName:'Main Rahoon Ya ...',
        songArtist:'Arman Malik',
        poster:'posters/main rahoon ya na rahoon.jpeg'
    },
    {
        id:24,
        songName:'Maula Mere Maula',
        songArtist:'Roop Kumar Rathood',
        poster:'posters/maula mere maula.jpeg'
    },
    {
        id:25,
        songName:'Meet',
        songArtist:'Arijit Singh',
        poster:'posters/meet.jpeg'
    },
    {
        id:26,
        songName:'Mera Mann Kehna Laga',
        songArtist:'Ayushman Khurana',
        poster:'posters/saddi galli.jpeg'
    },
    {
        id:27,
        songName:'Mi amor',
        songArtist:'Sharn',
        poster:'posters/mi amor.jpeg'
    },
    {
        id:28,
        songName:'Nadiyon sa',
        songArtist:'Mitraz',
        poster:'posters/mitraz.jpg'
    },
    {
        id:29,
        songName:'No Love',
        songArtist:'Subh',
        poster:'posters/no love.jpeg'
    },
    {
        id:30,
        songName:'Obsessed',
        songArtist:'Riar',
        poster:'posters/obsessed.jpeg'
    },
    {
        id:31,
        songName:'Pani da rang',
        songArtist:'Ayushman Khurana',
        poster:'posters/pani da rang.jpeg'
    },
    {
        id:32,
        songName:'Paniyoon Sa lofi',
        songArtist:'Atif Aslam',
        poster:'posters/paniyon sa.jpeg'
    },
    {
        id:33,
        songName:'Pehli Dafa',
        songArtist:'Atif Aslam',
        poster:'posters/pehli dafa.jpeg'
    },
    {
        id:34,
        songName:'Pyaar Hota',
        songArtist:'Arijit Singh',
        poster:'posters/pyaar hota hota.jpeg'
    },
    {
        id:35,
        songName:'Raanjhanaa',
        songArtist:'AR Rahaman',
        poster:'posters/raanjhanaa.jpeg'
    },
    {
        id:36,
        songName:'Saadi Galli',
        songArtist:'Ayushman Khurana',
        poster:'posters/saddi galli.jpeg'
    },
    {
        id:37,
        songName:'Shayad',
        songArtist:'Arijit Singh',
        poster:'posters/sayad.jpeg'
    },
    {
        id:38,
        songName:'Spaceship',
        songArtist:'Ap dillon',
        poster:'posters/spaceship.jpeg'
    },
    {
        id:39,
        songName:'Sun Maahi',
        songArtist:'Armaan Malik',
        poster:'posters/sun maahi.jpeg'
    },
    {
        id:40,
        songName:'Tere Vaaste',
        songArtist:'Varun Jain',
        poster:'posters/tere vaste.jpeg'
    },
    {
        id:41,
        songName:'True Stories',
        songArtist:'Ap dillon',
        poster:'posters/true stories.jpeg'
    },
    {
        id:42,
        songName:'Tu Aake Dhekle',
        songArtist:'King',
        poster:'posters/tu ake dhek le.jpeg'
    },
    {
        id:43,
        songName:'Tum se hi',
        songArtist:'Mohit Chauhan',
        poster:'posters/tum se hi.jpeg'
    },
    {
        id:44,
        songName:'We Rollin',
        songArtist:'Subh',
        poster:'posters/we rollin.jpeg'
    },
    {
        id:45,
        songName:'Your Eyes',
        songArtist:'unknown',
        poster:'posters/your eyes.jpeg'
    },
    {
        id:46,
        songName:'Zara sa',
        songArtist:'KK',
        poster:"posters/zara sa.jpeg"
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
        music.src=`musics/${index}.mp3`;
    })

    // song.addEventListener('click',(e)=>{
    //     index=e.target.id;
    //     music.src=`musics/${index}.mp3`;
    //     poster_master.src=`posters/${index}.jpeg`;
    //     music.play();
    // })
});

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