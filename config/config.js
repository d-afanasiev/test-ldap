const config = {
  url: process.env.LDAP,
  baseDN: process.env.BASEDN,
  username: process.env.USER,
  password: process.env.PASSWORD,
  includeMembership: ["user"],
  attributes: {
    user: [
      "displayName",
      "mail",
      "mail",
      "mobile",
      "userAccountControl",
      "streetAddress",
      "telephoneNumber",
      "title",
      "department",
      "company",
      "thumbnailPhoto",
    ],
  },
};

module.exports = config;
