"use strict";
const CustomError = require("../../domain/model/custom-error");
const CreateUrlCommand = require("../../domain/command/create-url-command");
const SearchCriteria = require("../../domain/model/search-criteria");

class AuthResolver {
  constructor(server, urlRepository) {
    this.server = server;
    this.urlRepository = urlRepository;
  }

  resolve() {
    this.server.post("/shorten", this.shortenUrl.bind(this));
    this.server.get("/urls", this.getUrls.bind(this));
    this.server.get("/stats/:shortUrl", this.getUrlStats.bind(this));
    this.server.get("/:shortUrl", this.redirect.bind(this));
  }

  async shortenUrl(request, response) {
    try {
      const command = new CreateUrlCommand(request.body.url);
      await this.urlRepository.createShortUrl(command);
      response.json({ short: command.short });
    } catch (error) {
      response.status(400).end(CustomError.toJson(error));
    }
  }
  async getUrls(request, response) {
    try {
      const searchCriteria = new SearchCriteria(request.query);
      const urls = await this.urlRepository.getUrls(searchCriteria);
      response.json(urls);
    } catch (error) {
      response.status(400).end(CustomError.toJson(error));
    }
  }
  async getUrlStats(request, response) {
    try {
      const shortUrl = request.params.shortUrl;
      if (!shortUrl || shortUrl.length > 50) throw new CustomError("Invalid input Short URL");
      const accessCount = await this.urlRepository.getUrlStats(shortUrl);
      response.json(accessCount);
    } catch (error) {
      response.status(400).end(CustomError.toJson(error));
    }
  }
  async redirect(request, response) {
    try {
      const shortUrl = request.params.shortUrl;
      if (!shortUrl || shortUrl.length > 50) throw new CustomError("Invalid input Short URL");
      const url = await this.urlRepository.getByOriginalUrlShortUrl(shortUrl);
      if (url) return response.redirect(url);
      return response.redirect("../not-found");
    } catch (error) {
      response.status(400).end(CustomError.validate(error).message);
    }
  }
}

module.exports = AuthResolver;
