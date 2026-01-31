
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Helper to download file
const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const dirs = [
    'public/images/movies',
    'public/images/books',
    'public/images/projects',
    'public/images/blogs'
];

// Ensure directories exist
dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const ASSETS = [
    // Movies
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(19).jpg", dest: "public/images/movies/ford-v-ferrari.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(20).jpg", dest: "public/images/movies/whiplash.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(21).jpg", dest: "public/images/movies/moneyball.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(22).jpg", dest: "public/images/movies/air.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(23).jpg", dest: "public/images/movies/rush.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(24).jpg", dest: "public/images/movies/social-network.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(25).jpg", dest: "public/images/movies/silicon-valley.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(26).jpg", dest: "public/images/movies/steve-jobs.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(27).jpg", dest: "public/images/movies/the-founder.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(28).jpg", dest: "public/images/movies/blackberry.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(29).jpg", dest: "public/images/movies/interstellar.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(30).jpg", dest: "public/images/movies/inception.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(31).jpg", dest: "public/images/movies/fight-club.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(32).jpg", dest: "public/images/movies/a-beautiful-mind.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(33).jpg", dest: "public/images/movies/black-mirror.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(34).jpg", dest: "public/images/movies/the-big-short.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(35).jpg", dest: "public/images/movies/margin-call.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(36).jpg", dest: "public/images/movies/the-wolf-of-wall-street.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(37).jpg", dest: "public/images/movies/dumb-money.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(38).jpg", dest: "public/images/movies/wall-street.jpg" },

    // Books
    { url: "https://ik.imagekit.io/ioktbcewp/download%20(26).jpg", dest: "public/images/books/steve-jobs.jpg" },
    { url: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg", dest: "public/images/books/atomic-habits.jpg" },
    { url: "https://img.drz.lazcdn.com/g/kf/S650826591e0d4af6af4f323a839ac67ar.jpg_720x720q80.jpg", dest: "public/images/books/pragmatic-programmer.jpg" },
    { url: "https://rukminim2.flixcart.com/image/480/640/xif0q/regionalbooks/5/h/r/show-your-work-best-quality-papaerback-austin-kleon-original-imaggx2xgk64hwgt.jpeg?q=90", dest: "public/images/books/show-your-work.jpg" },
    { url: "https://m.media-amazon.com/images/I/71uAI28kJuL.jpg", dest: "public/images/books/zero-to-one.jpg" },

    // Projects (Using the existing URLs)
    { url: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200", dest: "public/images/projects/notesbuddy.jpg" },
    { url: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200", dest: "public/images/projects/appwrite.jpg" },
    { url: "https://ik.imagekit.io/ioktbcewp/34_1x_shots_so.png?updatedAt=1766979795029", dest: "public/images/projects/pathfinder.jpg" },
    { url: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1200", dest: "public/images/projects/quest.jpg" }
];

const downloadAll = async () => {
    console.log("Starting downloads...");
    for (const asset of ASSETS) {
        try {
            console.log(`Downloading ${asset.dest}...`);
            await download(asset.url, asset.dest);
        } catch (e) {
            console.error(`Failed ${asset.dest}:`, e.message);
        }
    }
    console.log("Done!");
};

downloadAll();
