
const npa = require('npm-package-arg')
class cliCommons {
  static getInstallCommand () {
    return {
      command: 'install [package...]',
      // This list includes the install aliases supported by npm, that are partial words and typos
      // https://docs.npmjs.com/cli/v8/commands/npm-install#synopsis
      aliases: ['i', 'add', 'in', 'ins', 'inst', 'insta', 'instal', 'isnt', 'isnta', 'isntal', 'isntall'],
      desc: 'install a package',
      handler: (argv) => {
        if (argv && argv.package) {
          for (let i = 0; i < argv.package.length; i++) {
            const parsedPackage = npa(argv.package[i])
            // eslint-disable-next-line security/detect-object-injection
            argv.package[i] = `${parsedPackage.name}@${parsedPackage.fetchSpec}`
          }
        }
      }
    }
  }

  static getOptions () {
    return {
      P: {
        alias: ['save-prod', 'peer'],
        type: 'boolean'
      },
      D: {
        alias: ['save-dev', 'dev'],
        type: 'boolean'
      },
      O: {
        alias: ['save-optional', 'optional'],
        type: 'boolean'
      },
      E: {
        alias: ['save-exact', 'exact'],
        type: 'boolean'
      },
      B: {
        alias: 'save-bundle',
        type: 'boolean'
      },
      T: {
        alias: 'tilde',
        type: 'boolean'
      },
      nosave: {
        alias: 'no-save',
        type: 'boolean'
      },
      'dry-run': {
        alias: 'dry-run',
        type: 'boolean'
      }
    }
  }
}

module.exports = cliCommons
