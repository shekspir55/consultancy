import fs from "fs";
import { Podcast } from "podcast";

export default async function generatePodcastRssFeed() {
  const publicPath = "./public";
  const pathToFile = "./public/podcast/rss.xml";
  const podcastsDirectory = "./public/podcast/podcasts";
  const logoPath = "logo.png";

  const companyName = "Powered by Love LLC";
  const websiteUrl = "https://powered-by.love";
  const urlPathToPodcasts = "/podcast/podcasts";
  const authorName = "Ruben Khachatryan";
  const author = authorName;
  const description = `«Powered» փոդքասթը զրույցներ է Հայաստանի տեխնոլոգիական ոլորտի առանցքային դեմքերի հետ։
Յուրաքանչյուր դրվագում ոլորտի առաջատար մասնագետները կիսվում են իրենց փորձով, խոսում մարտահրավերների և հնարավորությունների մասին։ Քննարկում ենք տեխնոլոգիական զարգացումները, կրթությունը, ձեռնարկատիրությունը և ոլորտի ապագան։
Փոդքասթը նախատեսված է տեխնոլոգիական ոլորտի մասնագետների, ձեռներեցների և բոլոր նրանց համար, ովքեր հետաքրքրված են Հայաստանի տեխնոլոգիական էկոհամակարգի զարգացմամբ:
Հեղինակ և վարող՝ Ռուբեն Խաչատրյան`;
  const pubDate = new Date().toUTCString();

  const feed = new Podcast({
    title: "Powered.Podcast",
    description,
    feedUrl: `${websiteUrl}/podcast/rss.xml`,
    siteUrl: websiteUrl,
    imageUrl: `${websiteUrl}/podcast/${logoPath}`,
    author,
    managingEditor: authorName,
    webMaster: authorName,
    copyright: `${new Date().getFullYear()} ${companyName}`,
    language: "hy",
    categories: ["Armenia", "IT", "Software Development", "HR", "Engineering"],
    ttl: 60 * 3,
    // itunes
    itunesCategory: [
      {
        text: "Technology"
      },
    ],
  });

  const podcastFiles = fs.readdirSync(podcastsDirectory);

  console.log(`Podcast files: ${podcastFiles.join(", ")}`);

  // ՏՏի ապագան  ｜ Նարեկ Ասլիկյան [VvkGY74nX5I].mp3
  podcastFiles.forEach((fileName) => {
    const podcast = fs.readFileSync(`${podcastsDirectory}/${fileName}`, "utf8");
    const title = fileName.replace(".mp3", "");
    feed.addItem({
      title: title,
      description: "",
      url: `${websiteUrl}${urlPathToPodcasts}/${fileName}`,
      date: fs
        .statSync(`${podcastsDirectory}/${fileName}`)
        .birthtime.toUTCString(),
      // itunes
      enclosure: {
        url: `${websiteUrl}${urlPathToPodcasts}/${fileName}`,
        file: `${podcastsDirectory}/${fileName}`,
      },
      itunesAuthor: author,
      itunesExplicit: false,
      itunesNewFeedUrl: `${websiteUrl}${urlPathToPodcasts}/rss.xml`,
    });
  });

  const xml = feed.buildXml();

  fs.writeFileSync(pathToFile, xml);
}
