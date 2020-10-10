class UrlRepository {
  constructor(mySqlProvider) {
    this.mySqlProvider = mySqlProvider;
  }

  createShortUrl(command) {
    return this.mySqlProvider.query("INSERT IGNORE INTO db.url SET ?", command);
  }
  async getUrls({ offset, limit }) {
    const query = `SELECT * FROM db.url LIMIT ? OFFSET ?`;
    const total = await this.mySqlProvider.query("SELECT COUNT(*) AS total FROM db.url");
    const result = await this.mySqlProvider.query(query, [limit, offset]);
    return { urls: result, ...total[0] };
  }
  async getUrlStats(shortUrl) {
    const result = await this.mySqlProvider.query("SELECT accessCount FROM db.url WHERE short = ?", shortUrl);
    return result[0] ? result[0] : {};
  }
  async getByOriginalUrlShortUrl(url) {
    const result = await this.mySqlProvider.query("SELECT original FROM db.url WHERE short = ?", url);
    const originalUrl = result[0] && result[0].original ? result[0].original : "";
    const query = "UPDATE db.url SET accessCount = accessCount + 1 WHERE short = ?";
    if (originalUrl) await this.mySqlProvider.query(query, url);
    return originalUrl;
  }
}

module.exports = UrlRepository;
