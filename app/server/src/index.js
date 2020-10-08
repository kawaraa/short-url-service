const UrlRepository = require("./infrastructure/repository/url-repository");

const UrlResolver = require("./infrastructure/resolver/url-resolver");

module.exports = (router, mySqlProvider, config) => {
  // Repositories
  const urlRepository = new UrlRepository(mySqlProvider);

  // Resolvers
  const urlResolver = new UrlResolver(router, firewall, urlRepository);

  urlResolver.resolve();

  return router;
};
