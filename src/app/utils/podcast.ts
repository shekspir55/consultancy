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

  // if the file exists, return
  /* lets create an rss feed */
  const feed = new Podcast({
    title: "Powered.Podcast",
    description,
    feedUrl: `${websiteUrl}${urlPathToPodcasts}/rss.xml`,
    siteUrl: websiteUrl,
    imageUrl: `${websiteUrl}/podcast/${logoPath}`,
    // docs: 'http://example.com/rss/docs.html',
    author,
    managingEditor: authorName,
    webMaster: authorName,
    copyright: `${new Date().getFullYear()} ${companyName}`,
    language: "hy",
    categories: ["Armenia", "IT", "Software Development", "HR", "Engineering"],
    // pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: 60 * 3,

    itunesCategory: [
      {
        text: "Entertainment",
        subcats: [
          {
            text: "Television",
          },
        ],
      },
    ],
  });

  const podcastFiles = fs.readdirSync(podcastsDirectory);
  //log the podcast files with caption

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

  // /* loop over data and add to feed */
  // feed.addItem({
  //     title: 'item title',
  //     description: 'use this for the content. It can include html.',
  //     url: 'http://example.com/article4?this&that', // link to the item
  //     // guid: '1123', // optional - defaults to url
  //     categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'], // optional - array of item categories
  //     author: 'Guest Author', // optional - defaults to feed author property
  //     date: 'May 27, 2012', // any format that js Date can parse.

  //     itunesAuthor: 'Max Nowack',
  //     itunesExplicit: false,
  //     itunesSubtitle: 'I am a sub title',
  //     itunesSummary: 'I am a summary',
  //     itunesDuration: 12345,
  //     itunesNewFeedUrl: 'https://newlocation.com/example.rss',
  // });

  const xml = feed.buildXml();

  fs.writeFileSync(pathToFile, xml);
}
