import fs from "fs";
import { Podcast } from "podcast";

const CONFIG = {
  paths: {
    base: "./public",
    podcast: {
      root: "/podcast",
      get full() { return `${CONFIG.paths.base}${this.root}` },
      get rss() { return `${this.full}/rss.xml` },
      get audio() { return `${this.full}/podcasts` },
      get audioUrl() { return `${this.root}/podcasts` },
      get rssUrl() { return `${this.root}/rss.xml` },
      get logoUrl() { return `${this.root}/${this.logo}` },
      logo: "logo.png"
    }
  },
  company: {
    name: "Powered by Love LLC",
    email: "hello@powered-by.love",
    website: "https://powered-by.love",
    get copyright() { return `${new Date().getFullYear()} ${this.name}` }
  },
  podcast: {
    title: "Powered.Podcast",
    author: "Ruben Khachatryan",
    description: `«Powered» փոդքասթը զրույցներ է Հայաստանի տեխնոլոգիական ոլորտի առանցքային դեմքերի հետ։
Յուրաքանչյուր դրվագում ոլորտի առաջատար մասնագետները կիսվում են իրենց փորձով, խոսում մարտահրավերների և հնարավորությունների մասին։ Քննարկում ենք տեխնոլոգիական զարգացումները, կրթությունը, ձեռնարկատիրությունը և ոլորտի ապագան։
Փոդքասթը նախատեսված է տեխնոլոգիական ոլորտի մասնագետների, ձեռներեցների և բոլոր նրանց համար, ովքեր հետաքրքրված են Հայաստանի տեխնոլոգիական էկոհամակարգի զարգացմամբ:
Հեղինակ և վարող՝ Ռուբեն Խաչատրյան`,
    categories: ["Armenia", "IT", "Software Development", "HR", "Engineering"],
    language: "hy",
    get feedUrl() { return `${CONFIG.company.website}${CONFIG.paths.podcast.rssUrl}` },
    get siteUrl() { return CONFIG.company.website },
    get imageUrl() { return `${CONFIG.company.website}${CONFIG.paths.podcast.logoUrl}` },
    get itunesCategory() { return [{ text: "Technology" }] },
    get itunesOwner() {
      return {
        name: this.author,
        email: CONFIG.company.email
      }
    }
  }
};

function createPodcastFeedConfig() {
  return {
    title: CONFIG.podcast.title,
    description: CONFIG.podcast.description,
    feedUrl: CONFIG.podcast.feedUrl,
    siteUrl: CONFIG.podcast.siteUrl,
    imageUrl: CONFIG.podcast.imageUrl,
    author: CONFIG.podcast.author,
    managingEditor: CONFIG.podcast.author,
    webMaster: CONFIG.podcast.author,
    copyright: CONFIG.company.copyright,
    language: CONFIG.podcast.language,
    categories: CONFIG.podcast.categories,
    ttl: 60 * 3,
    itunesCategory: CONFIG.podcast.itunesCategory,
    itunesOwner: CONFIG.podcast.itunesOwner,
    itunesSummary: CONFIG.podcast.description,
  };
}

function createPodcastItem(fileName: string) {
  const filePath = `${CONFIG.paths.podcast.audio}/${fileName}`;
  const title = fileName.replace(".mp3", "");
  const podcastUrl = `${CONFIG.company.website}${CONFIG.paths.podcast.audioUrl}/${fileName}`;

  return {
    title,
    description: "",
    url: podcastUrl,
    date: fs.statSync(filePath).birthtime.toUTCString(),
    enclosure: {
      url: podcastUrl,
      file: filePath,
    },
    itunesAuthor: CONFIG.podcast.author,
    itunesExplicit: false,
    itunesNewFeedUrl: CONFIG.podcast.feedUrl,
  };
}

export default async function generatePodcastRssFeed() {
  const feed = new Podcast(createPodcastFeedConfig());

  const podcastFiles = fs.readdirSync(CONFIG.paths.podcast.audio);
  console.log(`Podcast files: ${podcastFiles.join(", ")}`);

  podcastFiles.forEach((fileName) => {
    feed.addItem(createPodcastItem(fileName));
  });

  fs.writeFileSync(CONFIG.paths.podcast.rss, feed.buildXml());
}
