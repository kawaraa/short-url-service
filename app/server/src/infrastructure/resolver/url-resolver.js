"use strict";
const CustomError = require("../../domain/model/custom-error");

class AuthResolver {
  constructor(server, urlRepository) {
    this.server = server;
    this.firewall = firewall;
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
      response.json({});
    } catch (error) {
      response.status(400).end(CustomError.toJson(error));
    }
  }
  async getUrls(request, response) {
    try {
      response.json();
    } catch (error) {
      response.status(400).end(CustomError.toJson(error));
    }
  }
  async redirect(request, response) {
    try {
      response.redirect("url");
    } catch (error) {
      response.status(400).end(CustomError.toJson(error));
    }
  }
  async getUrlStats(request, response) {
    try {
      response.json({ accessCount: 123 });
    } catch (error) {
      response.status(400).end(CustomError.toJson(error));
    }
  }
}

module.exports = AuthResolver;
