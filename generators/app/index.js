'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'This is the awesome and amazing ' + chalk.red('WEAN') + ' generator!'
        ));

        //Get array of inputs from the user
        var prompts = [{
                type: 'input',
                name: 'name',
                message: 'What would you love to name this project?',
                default: this.appname
        },
            {
                type: 'input',
                name: 'description',
                message: 'Please describe the project',
                default: "No description yet"
        },
            {
                type: 'input',
                name: 'repository',
                message: 'What is the project\'s GitHub repository?',
                default: "No repository yet"
        },
            {
                type: 'input',
                name: 'license',
                message: 'How would you love to license the project?',
                default: "MIT"
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.name;

            done();
        }.bind(this));
    },

    writing: {
        //Copy the confuguration files
        config: function () {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    name: this.props.name,
                    description: this.props.description,
                    repository: this.props.repository,
                    license: this.props.license,
                }
            );
            this.fs.copyTpl(
                this.templatePath('_bower.json'),
                this.destinationPath('bower.json'), {
                    name: this.props.name
                }
            );
            this.fs.copy(
                this.templatePath('_gruntfile.js'),
                this.destinationPath('Gruntfile.js')
            );
        },

        //Copy the project files
        projectfiles: function () {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
            this.fs.copy(
                this.templatePath('bowerrc'),
                this.destinationPath('.bowerrc')
            );
            this.fs.copyTpl(
                this.templatePath('_README.md'),
                this.destinationPath('README.md'), {
                    name: this.props.name,
                    description: this.props.description
                }
            );
			this.fs.copy(
				this.templatePath('_app-icon.icns'),
				this.destinationPath('app-icon.icns')
			);
			this.fs.copy(
				this.templatePath('_app-icon.ico'),
				this.destinationPath('app-icon.ico')
			);
        },

        //Copy the application files
        app: function () {
            // app/
            //////app.js
            this.fs.copy(
                this.templatePath('_app/_app.js'),
                this.destinationPath('app/app.js')
            );
            /////index.html
            this.fs.copyTpl(
                this.templatePath('_app/_index.html'),
                this.destinationPath('app/index.html'), {
                    name: this.props.name
                }
            );

            // app/routes/
            /////////////index.js
            this.fs.copy(
                this.templatePath('_app/_routes/_index.js'),
                this.destinationPath('app/routes/index.js')
            );

            // app/views/
            /////////////index.ejs
            this.fs.copyTpl(
                this.templatePath('_app/_views/_index.ejs'),
                this.destinationPath('app/views/index.ejs'), {
                    name: this.props.name
                }
            );

            // app/public/
            /////////////css
            /////////////////app.css
            this.fs.copy(
                this.templatePath('_app/_public/_css/_app.css'),
                this.destinationPath('app/public/css/app.css')
            );

            /////////////js
            /////////////////app.js
            this.fs.copy(
                this.templatePath('_app/_public/_js/_app.js'),
                this.destinationPath('app/public/js/app.js')
            );

            /////////////partials
            /////////////////header.html
            this.fs.copyTpl(
                this.templatePath('_app/_public/_partials/_header.html'),
                this.destinationPath('app/public/partials/header.html'), {
                    name: this.props.name
                }
            );
        },
    },

    install: function () {
        this.installDependencies();
    }
});
